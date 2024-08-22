import type {
  FieldConfig,
  OptionsType,
} from '@/components/Form/Field/models/field-config';

// eslint-disable-next-line import/no-cycle
import ArrayFields from './src/ArrayFields';
import OptionsField from './src/Options';
import TextField from './src/Text';

export type FieldProps<T extends string = any> = {
  fieldConfig: FieldConfig<T>;
  currentValue: any;
};

const FieldDisplay = ({ fieldConfig, currentValue }: FieldProps) => {
  switch (fieldConfig.type) {
    case 'hidden':
      return null;
    case 'array':
      return (
        <ArrayFields
          currentValue={currentValue}
          fieldConfig={fieldConfig as FieldConfig<'array'>}
        />
      );
    case 'radio':
    case 'select':
      return (
        <OptionsField
          currentValue={currentValue}
          fieldConfig={fieldConfig as FieldConfig<OptionsType>}
        />
      );
    default:
      return (
        <TextField currentValue={currentValue} fieldConfig={fieldConfig} />
      );
  }
};

export default FieldDisplay;
