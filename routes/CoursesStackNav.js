import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const CoursesStackNavigator = createNativeStackNavigator();

export const CoursesNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <CoursesStackNavigator.Navigator>
            <CoursesStackNavigator.Screen name="Landing" component={Landing} />
            <CoursesStackNavigator.Screen name="Details" component={CourseInfos} />
            <CoursesStackNavigator.Screen name="Cart" component={Cart} />
        </CoursesStackNavigator.Navigator>
    );
};
