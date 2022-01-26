import React from 'react';
import App from '../../App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import store from '../../redux/store';
import Landing from '../Landing';

// test('Shows "Hello world!"', () => {
//     const { getByTestId } = render(
//         <Provider store={store}>
//             <Landing />
//         </Provider>
//     );

//     expect(getByTestId('input').props.value).toBe('salut');
// });
