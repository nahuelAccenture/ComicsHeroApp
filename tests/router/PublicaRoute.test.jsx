import { render, screen } from "@testing-library/react";
import {AuthContext} from '../../src/auth';
import {PublicRoute} from '../../src/router/PublicRoute';

describe('pruebas en Public Route', () => {

    test('debe de mostrar el children si no esta autenticado', () => {
        
        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
        
    });

    test('debe de navegar si esta autenticado', () => {
        
    });
});