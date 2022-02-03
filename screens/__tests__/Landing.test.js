import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import store from '../../redux/store';
import Landing from '../Landing';

test('Shows "Hello world!"', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
            <Landing />
        </Provider>
    );

    const element = getByPlaceholderText(/yes/i);

    expect(element.props.placeholder).toBe('yes');
});
