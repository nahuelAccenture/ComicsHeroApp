import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/NavBar";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en el componente de NavBar', () => {

    const contextValue= {
        logged: true,
        user:{
            name:'Juan Carlos'
        },
        logout: jest.fn()
    }
    
    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario que esta logueado', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Juan Carlos')).toBeTruthy();

    });

    test('debe de llamar el logout y el navigate cuando se hace click en el boton', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');

        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});

        
    });
});