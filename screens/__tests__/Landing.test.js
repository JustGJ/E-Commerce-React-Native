import React from 'react';
import App from '../../App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import store from '../../redux/store';
import Landing from '../Landing';

// describe('With React Testing Library', () => {
// const initialState = { output: 10 };
// const mockStore = configureStore();
// let store;

test('Shows "Hello world!"', () => {
    // store = mockStore(initialState);
    const { getByTestId } = render(
        <Provider store={store}>
            <Landing />
        </Provider>
    );

    expect(getByTestId('input').props.value).toBe('salut');
    // expect(getByText('Hello World!')).not.toBeNull();
});
// });
