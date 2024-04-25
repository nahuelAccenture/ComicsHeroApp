import { render, screen } from "@testing-library/react";
import {AuthContext} from '../../src/auth';
import {PrivateRoute} from '../../src/router/PrivateRoute';
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en PrivateRoute', () => {


    test('deberia de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();


        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'Juan'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

       
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();

    });



});