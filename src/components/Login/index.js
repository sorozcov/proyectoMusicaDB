import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import * as actions from '../../actions/loggedUser';


const Login = ({ onSubmit }) => {
  const [mailInput, changeMailInput] = useState('');
  const [passwordInput, changePasswordInput] = useState('');
  return (
    <div className="form-login">
        <div className="form-login-container">
        <h1 className="form-login-title">
              {'Login'}
        </h1>
        <br/>
        <input className="form-login-input"
          type="text"
          placeholder="Correo"
          value={mailInput}
          onChange={e => changeMailInput(e.target.value)}
        />
        <input className="form-login-input"
          type="password"
          placeholder="Contraseña"
          value={passwordInput}
          onChange={e => changePasswordInput(e.target.value)}
        />
        <br/>
        <Link to={(mailInput!=='' && passwordInput!=='') ? '/main' : '/login'} >
          <button type="submit" className="form-login-button" onClick={
            () => onSubmit(mailInput, passwordInput)
          }>
            {'Ingresar'}
          </button>
        </Link>
        <br/>
        <label>
          {'¿No tienes cuenta? '}
          <Link to='/signin'>{'Crea tu cuenta'}</Link>
        </label>
      </div>
    </div>
  );
} 


export default connect(
  undefined,
  dispatch => ({
    onSubmit(mailInput, passwordInput) {
      (mailInput==="" || passwordInput==="") 
      ? alert("Ingresa los campos para continuar")
      : dispatch(actions.login(uuidv4()));
    },
  }),
)(Login);
