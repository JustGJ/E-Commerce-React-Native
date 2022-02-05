import React, { useReducer } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input';
import BtnForm from '../components/BtnForm';
import { formReducer } from '../formData.js/formReducer';
import { createCourse } from '../redux/actions/createCourse.action';
import { editCourse } from '../redux/actions/editCourse.action';
import globalStyles from '../styles/globalStyles';
import axios from 'axios';

const UserEditCourse = ({ navigation, route }) => {
    const courseId = route.params.courseId;

    // Si un id est passé en props, alors on va chercher dans le store le cours correspondant
    const myCourse = useSelector((state) =>
        state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
    );

    const dispatch = useDispatch();

    // STATE
    const formInitialState = {
        inputValues: {
            title: myCourse ? myCourse.title : '',
            img: myCourse ? myCourse.image : '',
            price: '',
            desc: myCourse ? myCourse.description : '',
        },
        isValidInput: {
            title: myCourse ? true : false,
            img: myCourse ? true : false,
            price: myCourse ? true : false,
            desc: myCourse ? true : false,
        },
        isValidForm: myCourse ? true : false,
    };

    const [formState, formDispatch] = useReducer(formReducer, formInitialState);

    const handlePressForm = async () => {
        const { title, img, price, desc } = formState.inputValues;

        const cours = {
            title,
            img,
            price,
            desc,
        };
        // Mise à jour du cours : Si on a un id passé en param via "Editer", alors on modifie le cours
        if (courseId) {
            // await updateDoc(doc(db, 'courses', courses.id), { title: title, img: img, desc: desc });
            // dispatch(editCourse(courseId, title, img, desc));
        }
        // Sinon on crée le cours
        else {
            axios
                .post('https://e-courses-coder-default-rtdb.firebaseio.com/courses.json', cours)
                .then((res) => console.log(res))
                .catch((error) => {
                    console.log(error);
                });
        }
        navigation.goBack();
    };

    // Value Input Change
    const inputHandler = (inputName, text) => {
        let isValidInput = false;

        if (text.length > 0) {
            isValidInput = true;
        }

        // Actions
        formDispatch({
            type: 'INPUT_VALIDATION',
            value: text,
            isValid: isValidInput,
            input: inputName,
        });
    };

    return (
        <ScrollView>
            <Input placeholder="yes" />

            <View style={styles.formContainer}>
                {/* Titre */}
                <Input
                    label="Titre"
                    value={formState.inputValues.title}
                    onKeyStroke={(text) => inputHandler('title', text)}
                />
                {/* Image */}
                <Input
                    label="Image (URL)"
                    value={formState.inputValues.img}
                    onKeyStroke={(text) => inputHandler('img', text)}
                />

                {/* Price or null */}
                {courseId ? null : (
                    <Input
                        label="Prix"
                        value={formState.inputValues.price}
                        onKeyStroke={(text) => inputHandler('price', text)}
                        keyboardType="decimal-pad"
                    />
                )}
                {/* Informations */}
                <Input
                    label="Informations"
                    value={formState.inputValues.desc}
                    onKeyStroke={(text) => inputHandler('desc', text)}
                    multiline
                    numberOfLines={5}
                />
                <BtnForm
                    btnText={formState.isValidForm ? 'Valider' : 'Veuillez remplir tous les champs'}
                    activate={formState.isValidForm ? false : true}
                    onHandlePress={handlePressForm}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 9,
        padding: 20,
        margin: 20,
    },
});

export default UserEditCourse;
