import {authReducer} from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
    
    test('Debe de retornar el estado inicial por defecto', () => {
        
        const state = authReducer({logged: false}, {} );
        expect(state).toEqual({logged: false});
    });

    test('Debe de llamar al login y establecer el usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                id: 123,
                name: 'Juan'
            }
        }

        const state = authReducer({logged:false}, action);

        expect(state).toEqual({
            logged:true,
            user: action.payload
        })
    });

    test('Debe de llamar al logout y borrar el name del usuario', () => {
        
        const state = {
            logged: true,
            user:{id:'124', name:'juan'}
        };

        const action = { type: types.logout}

        const newState = authReducer(state, action);

        expect(newState).toEqual({
            logged:false
        })
     });


});