import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import store from '../../redux/store';
import UserEditCourse from '../UserEditCourse';

test('Shows "Hello world!"', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
            <UserEditCourse />
        </Provider>
    );

    const element = getByPlaceholderText(/yes/i);

    expect(element.props.placeholder).toBe('yes');
});
