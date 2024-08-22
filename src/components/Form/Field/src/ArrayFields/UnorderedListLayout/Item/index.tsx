import { Grid, GridItem, ListItem, useDisclosure } from '@chakra-ui/react';
import type {
  FieldValues,
  UseFieldArrayMove,
  UseFieldArrayRemove,
  UseFormWatch,
} from 'react-hook-form';

// eslint-disable-next-line import/no-cycle
import Field from '@/components/Form/Field';
import type { FieldConfig } from '@/components/Form/Field/models/field-config';
import HeaderToolBar from '@/components/Form/Field/src/ArrayFields/HeaderToolBar';

type Props = {
  arrayHeaderKey?: string;
  itemKey: string;
  name: string;
  label: string;
  index: number;
  arr: Record<'id', string>[];
  fieldConfigs: FieldConfig[];
  watch: UseFormWatch<FieldValues>;
  remove: UseFieldArrayRemove;
  move: UseFieldArrayMove;
};

const UnorderedListItem = ({
  itemKey,
  name,
  label,
  index,
  arr,
  fieldConfigs,
  arrayHeaderKey,
  watch,
  remove,
  move,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <ListItem mb='10px'>
      <HeaderToolBar
        arr={arr}
        arrayHeaderKey={arrayHeaderKey}
        fieldConfigs={fieldConfigs}
        headerName={`${label} ${index + 1}`}
        index={index}
        isOpen={isOpen}
        move={move}
        name={`${name}.${index}`}
        remove={remove}
        watch={watch}
        onToggle={onToggle}
      />

      {isOpen && (
        <Grid as='article' gap={3} templateColumns='repeat(12, 1fr)'>
          {fieldConfigs.map((fieldConfig) => {
            const innerName = `${name}.${index}.${fieldConfig.name}`;
            return (
              <GridItem
                key={fieldConfig.name}
                colSpan={fieldConfig.col ?? 12}
                pos='relative'
              >
                <Field
                  key={itemKey + innerName}
                  fieldConfig={{
                    ...fieldConfig,
                    name: innerName,
                  }}
                />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </ListItem>
  );
};

export default UnorderedListItem;
