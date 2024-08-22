import type { UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

type Props = Partial<UseFormProps> & {
  onSubmit?: (data: any) => void;
  children: (methods: UseFormReturn) => React.ReactNode;
};

const FormWrapper = ({
  onSubmit = () => undefined,
  children,
  ...useFormProps
}: Props) => {
  const methods = useForm(useFormProps);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children(methods)}
        <button type='submit'>SUBMIT</button>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
