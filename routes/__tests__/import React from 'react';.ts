import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';
import { DrawerNavigator } from '../DrawerNav';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';

const store = configureStore();

describe('Testing React Navigation', () => {
    test('screen contains a linking to the cart page', async () => {
        const component = (
            <NavigationContainer>
                <Provider store={store}>
                    <DrawerNavigator />
                </Provider>
            </NavigationContainer>
        );
        const { findByText, findAllByText } = render(component);
        const link = await findByText('Panier');
        expect(link).toBeTruthy();
    });
});
