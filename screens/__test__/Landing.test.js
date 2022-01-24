import React from 'react';
import { render } from '@testing-library/react-native';
import Landing from '../Landing';

test('examples of some things', async () => {
    const { getByTestId } = render(<Landing />);
    const famousProgrammerInHistory = 'salut';

    expect(getByTestId('input').props.value).toBe(famousProgrammerInHistory);
});
