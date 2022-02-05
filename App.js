import React from 'react';
import { Provider } from 'react-redux';
import AppNav from './routes/AppNav';
import configureStore from './redux/store';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            {/* Tout les screens présents dans AppNav, auront accès aux props navigation et route */}
            <AppNav />
        </Provider>
    );
}
