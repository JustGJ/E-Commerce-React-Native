import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserCourses from '../screens/UserCourses';
import UserEditCourse from '../screens/UserEditCourse';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import globalStyles from '../styles/globalStyles';

// createNativeStackNavigator() : Fournit à l'application un moyen de passer d'un écran à l'autre, chaque nouvel écran étant placé au-dessus d'une pile
const UserStackNavigator = createNativeStackNavigator();

export const UserNavigator = () => {
    return (
        // Le Navigator doit contenir des Screen éléments comme enfants pour définir la configuration des itinéraires.
        <UserStackNavigator.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: globalStyles.green },
                headerTitleStyle: { fontWeight: 'bold' },
                headerTintColor: globalStyles.white,
            }}>
            <UserStackNavigator.Screen
                name="Courses"
                component={UserCourses}
                options={({ navigation }) => ({
                    title: 'Mes cours',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item title="Menu" iconName="menu" onPress={() => navigation.openDrawer()} />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item
                                title="Editer"
                                iconName="library-add"
                                onPress={() => navigation.navigate('Edit', { title: 'Créer un cours' })}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
            <UserStackNavigator.Screen
                name="Edit"
                component={UserEditCourse}
                options={({ route }) => ({
                    title: route.params.title ? route.params.title : 'Editer le cours',
                })}
            />
        </UserStackNavigator.Navigator>
    );
};
