import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { CoursesNavigator } from './CoursesStackNav';
import { CartNavigator } from './CartStackNav';
import { PaymentNavigator } from './PaymentStackNav';
import globalStyles from '../styles/globalStyles';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires. Drawer possède un header a true par défault
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: globalStyles.green,
                },
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
            {/* Onglet Home */}
            <Drawer.Screen
                name="Home"
                component={CoursesNavigator}
                options={{
                    title: 'Catalogue',
                    drawerIcon: () => <MaterialIcons name="menu-book" size={24} />,
                }}
            />
            {/* Onglet Cart */}
            <Drawer.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    title: 'Panier',
                    drawerIcon: () => <MaterialIcons name="shopping-cart" size={24} />,
                }}
            />
            {/* Onglet Payment */}
            <Drawer.Screen
                name="Payments"
                component={PaymentNavigator}
                options={{
                    title: 'Achats',
                    drawerIcon: () => <MaterialIcons name="credit-card" size={24} />,
                }}
            />
        </Drawer.Navigator>
    );
};
