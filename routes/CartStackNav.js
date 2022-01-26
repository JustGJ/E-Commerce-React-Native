import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const CartStackNavigator = createNativeStackNavigator();

export const CartNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <CartStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            {/* Payment */}
            <CartStackNavigator.Screen name="Cart" component={Cart} options={{ title: 'Panier' }} />
        </CartStackNavigator.Navigator>
    );
};
