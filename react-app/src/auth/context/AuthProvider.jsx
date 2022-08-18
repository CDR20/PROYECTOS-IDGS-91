import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
    message: ''
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init);

  const login = async( user = {} ) => {

    await fetch('https://www.proyectos.dsgys.com/api/v1/login', {
      method: 'POST',
      type: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)})
      .then( response => response.json())
      .then( (data) => {

        if(data.message?.length > 0){
          const action = {
            type: types.logout,
            payload: data.message
          }
          dispatch(action);
          return false;
        }

        const action = {
          type: types.login,
          payload: {
            data: data.user,
            token: data.token,
            message: ''
          }
        }

        localStorage.setItem('user', JSON.stringify(action.payload));
        dispatch(action);
      });

  }

  const logout = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout,
      payload: ''
    }

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}
