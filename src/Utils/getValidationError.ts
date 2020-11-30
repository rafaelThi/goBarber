import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationError(err: ValidationError): Errors {
  const validatorErrors: Errors = {};

  err.inner.forEach(error => {
    // esse caminho err.inner é possivel ver no console do navegador.
    validatorErrors[error.path] = error.message;
  });

  return validatorErrors;
}
