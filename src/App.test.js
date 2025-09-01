import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

// Este teste verifica se o componente App renderiza corretamente
test('renders a heading', () => {
// Envolve o componente App no Provider, passando a store
render(
<Provider store={store}>
<App />
</Provider>
);

// Busca o elemento de título com o texto "Testando logs"
const headingElement = screen.getByText(/Testando logs/i);

// Verifica se o elemento está presente no documento
expect(headingElement).toBeInTheDocument();
});