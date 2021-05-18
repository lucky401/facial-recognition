import { useContext } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';

import { RenderInput } from './RenderInput.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const lower = (value) => value && value.toLowerCase();

const AccountRegister = ({ handleSubmit, pristine, submitting }) => {
  let history = useHistory();
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const onSubmit = async (formValues) => {
    try {
      const { name, email, password } = formValues;
      await onRegister(name, email, password);
      history.push('/login');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="grid gap-4 grid-rows-3 grid-flow-row"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        id="input-name"
        name="name"
        type="text"
        label="Enter Name"
        placeholder="Enter Name"
        component={RenderInput}
      />
      <Field
        label="Enter Email"
        type="email"
        name="email"
        placeholder="Enter Email"
        component={RenderInput}
        normalize={lower}
      />
      <Field
        label="Enter Password"
        type="password"
        name="password"
        placeholder="Enter Password"
        component={RenderInput}
      />
      <button
        type="submit"
        disabled={pristine || submitting || isLoading}
        className="px-2 py-2 text-center text-white block bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100 disabled:opacity-50"
      >
        Get started!
      </button>
      {error ? (
        <div className="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg w-full">
          <div className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="px-3">
            <h3 className="text-red-800 font-semibold tracking-wider">Error</h3>
            <p>{error}</p>
          </div>
        </div>
      ) : null}
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }

  if (!formValues.email) {
    errors.email = 'You must enter a email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  } else if (formValues.password.length < 6) {
    errors.password = 'Must be at least 6 character';
  }

  return errors;
};

export default reduxForm({
  form: 'accountRegister',
  destroyOnUnmount: true, // <------ preserve form data (true/false)
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(AccountRegister);
