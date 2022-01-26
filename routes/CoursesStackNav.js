import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const CoursesStackNavigator = createNativeStackNavigator();

export const CoursesNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <CoursesStackNavigator.Navigator
            // Tout les header auront les mêmes styles
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: globalStyles.green },
                headerTitleStyle: { fontWeight: 'bold' },
                headerTintColor: globalStyles.white,

                // Custom Header Button Cart
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item
                            title="Panier"
                            iconName="shopping-cart"
                            onPress={() => navigation.navigate('Cart')}
                        />
                    </HeaderButtons>
                ),
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                        <Item title="Menu" iconName="menu" onPress={() => navigation.openDrawer()} />
                    </HeaderButtons>
                ),
            })}>
            {/* Landing */}
            <CoursesStackNavigator.Screen name="Landing" component={Landing} />

            {/* Details */}
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </CoursesStackNavigator.Navigator>
    );
};
