import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CoursesNavigator } from './CoursesStackNav';
import { DrawerNavigator } from './DrawerNav';

// NavigationContainer est un composant qui gère notre arbre de navigation et contient l'état de navigation .
// Ce composant doit envelopper la structure de tous les navigateurs.
// Nous rendons ce composant à la racine de notre application.
const AppNav = () => {
    return (
        <NavigationContainer>
            {/* <CoursesNavigator /> */}
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default AppNav;
