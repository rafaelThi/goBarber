import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationError(err: ValidationError): Errors {
  const validatorErrors: Errors = {};

  err.inner.forEach(error => {
    validatorErrors[error.path] = error.message;
  });

  return validatorErrors;
}
