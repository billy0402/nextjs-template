import { useRef } from 'react';

import {
  Button,
  Center,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import type {
  FieldValues,
  UseFieldArrayMove,
  UseFieldArrayRemove,
  UseFormWatch,
} from 'react-hook-form';

import CustomIconBtn from '@/components/CustomIconBtn';
import type { FieldConfig } from '@/components/Form/Field/models/field-config';
import FieldDisplay from '@/components/Form/FieldDisplay';

type Props = {
  arrayHeaderKey?: string;
  fieldConfigs?: FieldConfig[];
  index: number;
  arr: Record<'id', string>[];
  isOpen: boolean;
  headerName: string;
  name?: string;
  watch?: UseFormWatch<FieldValues>;
  remove: UseFieldArrayRemove;
  move: UseFieldArrayMove;
  onToggle: () => void;
  canDelete?: boolean;
};

const HeaderToolBar = (props: Props) => {
  const {
    index,
    fieldConfigs,
    arr,
    isOpen,
    headerName,
    name,
    watch,
    remove,
    move,
    onToggle,
    arrayHeaderKey,
    canDelete = true,
  } = props;
  const firstFieldRef = useRef(null);
  const { onOpen, onClose, isOpen: deleteOpen } = useDisclosure();

  return (
    <Flex
      alignItems='center'
      as='header'
      bg='line'
      borderRadius='md'
      mb={isOpen ? '10px' : 0}
      top='-20px'
    >
      {canDelete && (
        <Popover
          initialFocusRef={firstFieldRef}
          isOpen={deleteOpen}
          placement='top-start'
          onClose={onClose}
          onOpen={onOpen}
        >
          <PopoverTrigger>
            <CustomIconBtn
              aria-label='刪除項目'
              backgroundColor='danger'
              fontSize='xl'
              icon='delete'
            />
          </PopoverTrigger>
          <PopoverContent borderColor='line'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader borderBottom='1px solid #ebebf2'>
              確定要刪除嗎？
            </PopoverHeader>
            {deleteOpen && (
              <PopoverBody maxH='220px' overflow='auto'>
                <Stack spacing='0'>
                  {name &&
                    watch &&
                    watch(name) &&
                    fieldConfigs?.map((fieldConfig: any) => (
                      <FieldDisplay
                        key={fieldConfig.name}
                        currentValue={(watch(name) as any)[fieldConfig.name]}
                        fieldConfig={fieldConfig}
                      />
                    ))}
                </Stack>
              </PopoverBody>
            )}
            <PopoverFooter borderTop='1px solid #EBEBF2'>
              <Button onClick={() => remove(index)}>確定</Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      )}
      <Text as='b' flex={1} ml='15px'>
        {headerName}{' '}
        {watch && name && arrayHeaderKey && watch(`${name}.${arrayHeaderKey}`)
          ? watch(`${name}.${arrayHeaderKey}`)
          : ''}
      </Text>
      <Center as='aside'>
        <CustomIconBtn
          aria-label='向上移'
          backgroundColor='line'
          color='accent'
          fontSize='xl'
          icon='arrowUp'
          onClick={() => (index !== 0 ? move(index, index - 1) : null)}
        />
        <CustomIconBtn
          aria-label='向下移'
          backgroundColor='line'
          color='accent'
          fontSize='xl'
          icon='arrowDown'
          onClick={() =>
            index !== arr.length - 1 ? move(index, index + 1) : null
          }
        />
        <CustomIconBtn
          aria-label='收合按鈕'
          backgroundColor='transparent'
          color='accent'
          fontSize='xl'
          icon='chevronDown'
          transform={isOpen ? 'unset' : 'rotate(-180deg)'}
          onClick={onToggle}
        />
      </Center>
    </Flex>
  );
};

export default HeaderToolBar;
