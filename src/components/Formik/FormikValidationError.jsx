import React from 'react';

export function FormikValidationError(props) {
  const { name, touched, errors } = props;

  return touched[name] && !!errors[name] ? (
    <div className='validation'> {errors[name] ? errors[name] : ''}</div>
  ) : (
    <></>
  );
}
