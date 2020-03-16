import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, reduxForm } from 'redux-form';

import './styles.css';


const onSubmit = () => {
  console.log(uuidv4());
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div >
      <input {...input} className="form-signin-input" placeholder={label} type={type} />
      {touched &&
        (error && <span>{error}</span>)}
    </div>
);

const Signin = ({ handleSubmit, submitting }) => {
  return (
    <div className="form-signin">
        <div className="form-signin-container">
        <h1 className="form-signin-title">
          {'Crear cuenta'}
        </h1>
        <br/>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="name"
            type="text"
            value=''
            component={renderField}
            label="Nombre"
          />
          <Field 
            name="email" 
            type="email" 
            component={renderField} 
            label="Correo" 
          />
          <Field 
            name="age" 
            type="number" 
            component={renderField} 
            label="Age" 
          />
          <br/>
          <button type="submit" className="form-signin-button" disabled={!submitting}>
            {'Crear'}
          </button>
        </Form>
        <br/>
        <label>
          {'¿Ya tienes una cuenta? '}
          <Link to='/login'>{'Inicia sesión'}</Link>
        </label>
      </div>
    </div>
  );
} 

export default reduxForm({
  form: 'signin',
  validate: values => {
    console.log(values)
    const errors = {}
    if (!values.name) {
      errors.name = 'Obligatorio'
    } else if (values.username.length > 10) {
      errors.name = 'Debe tener 10 caracteres o menos'
    }
    if (!values.email) {
      errors.email = 'Obligatorio'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email invalido'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
  },
})(Signin)
