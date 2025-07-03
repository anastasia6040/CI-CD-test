import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('рендерит заголовок магазина', () => {
    render(<App />);
    const titleElement = screen.getByText(/Гонщик/i);
    expect(titleElement).toBeInTheDocument();
});
