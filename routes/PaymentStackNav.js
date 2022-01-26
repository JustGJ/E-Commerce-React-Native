import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Payments from '../screens/Payments';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const PaymentStackNavigator = createNativeStackNavigator();

export const PaymentNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <PaymentStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            {/* Payment */}
            <PaymentStackNavigator.Screen
                name="Payment"
                component={Payments}
                options={{ title: 'Mes achats' }}
            />
        </PaymentStackNavigator.Navigator>
    );
};
