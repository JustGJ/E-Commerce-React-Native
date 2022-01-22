import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CoursesNavigator } from './CoursesStackNav';

// NavigationContainer est un composant qui gère notre arbre de navigation et contient l'état de navigation .
// Ce composant doit envelopper la structure de tous les navigateurs.
// Habituellement, nous rendons ce composant à la racine de notre application.
const AppNav = () => {
    return (
        <NavigationContainer>
            <CoursesNavigator />
        </NavigationContainer>
    );
};

export default AppNav;
