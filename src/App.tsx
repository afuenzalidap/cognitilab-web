import React from 'react';
import { ProductosProvider } from './context/ProductosContext';
import { PrincipalPage } from './pages/PrincipalPage';

const AppState = ({ children }: any) => {
    return (
        <ProductosProvider>
            { children }
        </ProductosProvider>
    )
}

export const App = () => {
    return (
        <AppState>
            <PrincipalPage />
        </AppState>
    )
}
