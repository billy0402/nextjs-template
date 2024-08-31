import type { NextPage } from 'next';

import CustomBtn from '@/components/CustomBtn';
import Form from '@/components/Form';
import type { FieldConfig } from '@/components/Form/Field/models/field-config';

const fieldConfigs: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    name: 'fruit',
    label: 'Fruit',
    type: 'checkbox',
    required: true,
    options: ['apple', 'banana', 'orange'],
    displayOptions: ['Apple', 'Banana', 'Orange'],
  },
  {
    name: 'sex',
    label: 'Sex',
    type: 'singleCheckbox',
    required: true,
    options: ['male', ' female'],
    displayOptions: ['Male', 'Female'],
  },
];

const HomePage: NextPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form fieldConfigs={fieldConfigs} onSubmit={onSubmit}>
      <CustomBtn label='Submit' type='submit' />
    </Form>
  );
};

export default HomePage;
