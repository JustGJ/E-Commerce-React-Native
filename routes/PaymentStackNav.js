import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Payments from '../screens/Payments';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const PaymentStackNavigator = createNativeStackNavigator();

export const PaymentNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <PaymentStackNavigator.Navigator
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
            })}>
            {/* Payment */}
            <PaymentStackNavigator.Screen
                name="Payment"
                component={Payments}
                options={{ title: 'Mes achats' }}
            />
        </PaymentStackNavigator.Navigator>
    );
};
