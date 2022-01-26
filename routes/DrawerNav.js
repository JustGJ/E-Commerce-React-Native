import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { CoursesNavigator } from './CoursesStackNav';
import { CartNavigator } from './CartStackNav';
import { PaymentNavigator } from './PaymentStackNav';
import { UserNavigator } from './UserStackNav';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
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
            {/* Onglet Achats */}
            <Drawer.Screen
                name="Payments"
                component={PaymentNavigator}
                options={{
                    title: 'Achats',
                    drawerIcon: () => <MaterialIcons name="credit-card" size={24} />,
                }}
            />

            {/* Onglet Mes cours */}
            <Drawer.Screen
                name="Courses"
                component={UserNavigator}
                options={{
                    title: 'Mes cours',
                    drawerIcon: () => <MaterialIcons name="mic" size={24} />,
                }}
            />
        </Drawer.Navigator>
    );
};
