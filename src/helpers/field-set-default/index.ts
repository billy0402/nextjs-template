import type { FieldConfig } from '@/components/Form/Field/models/field-config';
import datetime from '@/helpers/datetime';
import { dotKeysValue } from '@/helpers/object';

export const fieldSetDefault = (
  sourceField: FieldConfig[],
  sourceData: any,
) => {
  const editField: any = {};

  sourceField.forEach((field) => {
    let defaultData = sourceData
      ? (dotKeysValue(sourceData, field.name) as any)
      : null;

    switch (field.type) {
      case 'date':
        defaultData = datetime(new Date(defaultData)).onlyDate();
        if (defaultData === 'Invalid Date') {
          defaultData = '';
        }
        break;
      case 'number':
        defaultData = defaultData ?? 0;
        break;
      case 'datetime-local':
        defaultData = defaultData?.split('.')[0];
        break;
      case 'boolean':
        defaultData = defaultData?.toString() === 'true';
        break;
      default:
        defaultData = defaultData ?? '';
        break;
    }

    editField[field.name] = defaultData;
  });

  return editField;
};
