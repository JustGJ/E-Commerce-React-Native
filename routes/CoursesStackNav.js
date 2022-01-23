import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';
import globalStyles from '../styles/globalStyles';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const CoursesStackNavigator = createNativeStackNavigator();

export const CoursesNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <CoursesStackNavigator.Navigator
            // Tout les header auront les mêmes styles
            screenOptions={{
                headerStyle: { backgroundColor: globalStyles.green },
                headerTitleStyle: { fontWeight: 'bold' },
                headerTintColor: globalStyles.white,
            }}>
            <CoursesStackNavigator.Screen name="Landing" component={Landing} />
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <CoursesStackNavigator.Screen name="Cart" component={Cart} />
        </CoursesStackNavigator.Navigator>
    );
};
