import { FormErrorMessage } from '@chakra-ui/react';
import type { FieldErrors, FieldValues } from 'react-hook-form';

import { dotKeysValue } from '@/helpers/object';

type Props = {
  errors: FieldErrors<FieldValues>;
  name: string;
};

const ErrorMessage = ({ errors, name }: Props) => {
  return (
    <FormErrorMessage>
      {dotKeysValue(errors, name) && (
        <span className='form__error-message'>
          {dotKeysValue(errors, name)?.message}
        </span>
      )}
    </FormErrorMessage>
  );
};

export default ErrorMessage;
