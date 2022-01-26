import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TextInput, View } from 'react-native';

import CourseItem from '../components/CourseItem';
import EmptyData from '../components/EmptyData';
import { addToCart } from '../redux/actions/addToCart.action';

const Landing = ({ navigation }) => {
    const dispatch = useDispatch();
    const existingCourses = useSelector((state) => state.courses.existingCourses); // Tout les cours
    const coursesToDisplay = existingCourses.filter((course) => course.selected === false); // Affiche uniquement les cours non selectionnés

    // Ajout panier : Déclenche ADD_TO_CART dans cart.reducer et courses.reducer
    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        alert('Article ajouté au panier');
    };

    // Si pas de cours dans le store, return un message
    if (!coursesToDisplay.length) {
        return <EmptyData text="Pas de cours à afficher" />;
    }

    // Sinon on afficher les cours
    return (
        <View>
            <FlatList
                data={coursesToDisplay}
                renderItem={({ item }) => (
                    <CourseItem
                        image={item.image}
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
