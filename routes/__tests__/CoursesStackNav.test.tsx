import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import AppNav from '../AppNav';
import { DrawerNavigator } from '../DrawerNav';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import { CoursesNavigator } from '../CoursesStackNav';

const store = configureStore();

describe('Testing react navigation', () => {
    test('page contains 3 items', async () => {
        const component = (
            <NavigationContainer>
                <Provider store={store}>
                    <CoursesNavigator />
                </Provider>
            </NavigationContainer>
        );

        const { findAllByText } = render(component);
        const items = await findAllByText(/LEARNING/i);

        expect(items.length).toBe(3);
    });
    test('clicking on one item takes you to the details screen', async () => {
        const component = (
            <NavigationContainer>
                <Provider store={store}>
                    <CoursesNavigator />
                </Provider>
            </NavigationContainer>
        );
        const { findByText } = render(component);
        const toClick = await findByText(/LEARNING WORDPRESS COURSE/i);

        fireEvent(toClick, 'press');
        const newBody = await findByText('Great WordPress course');
        expect(newBody).toBeTruthy();
    });
});
