import { Field, reduxForm } from 'redux-form';

import { RenderInput } from './RenderInput.component';

const lower = (value) => value && value.toLowerCase();

const AccountRegister = ({ handleSubmit, pristine, submitting }) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
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
        disabled={pristine || submitting}
        className="px-2 py-2 text-center text-white block bg-gradient-to-br from-green-400 to-blue-500 border border-transparent rounded-md hover:to-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-100 disabled:opacity-50"
      >
        Get started!
      </button>
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
