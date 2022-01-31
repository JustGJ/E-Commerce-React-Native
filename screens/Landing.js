import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TextInput, View } from 'react-native';
import axios from 'axios';

import CourseItem from '../components/CourseItem';
import EmptyData from '../components/EmptyData';
import { addToCart } from '../redux/actions/addToCart.action';
import { getCourses } from '../redux/actions/getCourses.action';
import { parse } from 'expo-linking';

// import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { db } from '../firebase';

const Landing = ({ navigation }) => {
    const dispatch = useDispatch();
    const existingCourses = useSelector((state) => state.courses.existingCourses); // Tout les cours
    const coursesToDisplay = existingCourses.filter((course) => course.selected === false); // Affiche uniquement les cours non selectionnés

    const [data, setData] = useState([]);
    // Ajout panier : Déclenche ADD_TO_CART dans cart.reducer et courses.reducer
    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        alert('Article ajouté au panier');
    };

    // useEffect(() => {
    //     dispatch(getCourses());
    // }, []);
    const courses = useSelector((state) => state.courses.courses); // Tout les cours

    console.log(courses);

    // Si pas de cours dans le store, return un message
    // if (!coursesToDisplay.length) {
    //     return <EmptyData text="Pas de cours à afficher" />;
    // }

    // Sinon on afficher les cours
    return (
        <View>
            <FlatList
                data={data}
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
