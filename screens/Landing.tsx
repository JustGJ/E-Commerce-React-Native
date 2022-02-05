import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TextInput, View } from 'react-native';
import CourseItem from '../components/CourseItem';
import EmptyData from '../components/EmptyData';
import { addToCart } from '../redux/actions/addToCart.action';
import { getCoursesRequest } from '../redux/actions/getCourses.action';
import { RootState } from '../redux/reducers/rootReducer';

const Landing = ({ navigation }) => {
    const dispatch = useDispatch();

    const { courses } = useSelector((state: RootState) => state.courses); // Tout les cours

    // Ajout panier : Déclenche ADD_TO_CART dans cart.reducer et courses.reducer
    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        alert('Article ajouté au panier');
    };

    useEffect(() => {
        dispatch(getCoursesRequest());
    }, []);

    // Si pas de cours dans le store, return un message
    // if (!courses.length) {
    //     return <EmptyData text="Pas de cours à afficher" />;
    // }

    // Sinon on afficher les cours
    return (
        <View>
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    <CourseItem
                        image={item.img}
                        title={item.title}
                        price={item.price}
                        viewDetails={() =>
                            navigation.navigate('Details', { courseId: item.id, title: item.title })
                        }
                        onAddToCart={() => handleAddToCart(item)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Landing;

// const existingCourses = useSelector((state) => state.courses.existingCourses); // Tout les cours
// const coursesToDisplay = existingCourses.filter((course) => course.selected === false); // Affiche uniquement les cours non selectionnés
