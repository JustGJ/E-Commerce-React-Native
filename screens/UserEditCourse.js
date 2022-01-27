import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createCourse } from '../redux/actions/createCourse.action';
import { editCourse } from '../redux/actions/editCourse.action';
import globalStyles from '../styles/globalStyles';

const UserEditCourse = ({ navigation, route }) => {
    const courseId = route.params.courseId;

    // Si un id est passé en props, alors on va chercher dans le store le cours correspondant
    const course = useSelector((state) =>
        state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
    );

    const dispatch = useDispatch();

    const [title, setTitle] = useState(course ? course.title : '');
    const [image, setImage] = useState(course ? course.image : '');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState(course ? course.description : '');

    const handlePressForm = () => {
        // Mise à jour du cours : Si on a un id passé en param via "Editer", alors on modifie le cours
        if (courseId) {
            dispatch(editCourse(courseId, title, image, desc));
        }
        // Sinon on crée le cours
        else {
            dispatch(createCourse(title, desc, image, parseInt(price)));
        }
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                {/* Titre */}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Titre</Text>
                    <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
                </View>
                {/* Image */}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image (URL)</Text>
                    <TextInput style={styles.input} value={image} onChangeText={(text) => setImage(text)} />
                </View>
                {course ? null : (
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={(text) => setPrice(text)}
                        />
                    </View>
                )}
                {/* Informations */}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Informations</Text>
                    <TextInput style={styles.input} value={desc} onChangeText={(text) => setDesc(text)} />
                </View>
                {/* Valider */}
                <TouchableOpacity onPress={handlePressForm}>
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Valider</Text>
                    </View>
                </TouchableOpacity>
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
    formControl: {
        width: '100%',
    },
    label: {
        marginVertical: 15,
        color: globalStyles.green,
        fontWeight: 'bold',
    },
    input: {
        padding: 9,
        borderColor: globalStyles.green,
        borderWidth: 0.5,
        borderRadius: 6,
    },
    btnContainer: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.orange,
        marginTop: 20,
    },
    btnText: {
        fontSize: 19,
        textAlign: 'center',
    },
});

export default UserEditCourse;
