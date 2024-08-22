import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import CustomIcon from '@/components/CustomIcon';
import CustomIconBtn from '@/components/CustomIconBtn';
import Field from '@/components/Form/Field';
import type { FieldConfig } from '@/components/Form/Field/models/field-config';
import { fieldSetDefault } from '@/helpers/field-set-default';
import { formatQueryString } from '@/helpers/query';

type Props = {
  advancedSearchConfigs: FieldConfig[] | undefined;
  fixedQueryKeys?: string[];
  extraActions?: React.ReactNode;
};

const SearchForm = ({
  advancedSearchConfigs,
  fixedQueryKeys,
  extraActions,
}: Props) => {
  const router = useRouter();
  const methods = useForm();
  const { register, handleSubmit, reset } = methods;
  const { onOpen, onClose, isOpen } = useDisclosure();

  const { query, asPath } = router;

  const [currentOrder, setCurrentOrder] = useState<'ASC' | 'DESC'>('ASC');

  useEffect(() => {
    const editData = advancedSearchConfigs
      ? fieldSetDefault(
          [
            ...advancedSearchConfigs,
            {
              name: 'keyword',
              type: 'text',
              label: '關鍵字',
            },
          ] || [],
          query,
        )
      : { keyword: query.keyword };
    reset(editData);
  }, [advancedSearchConfigs, query, reset]);

  const onSubmit = (data: any) => {
    const fixedQuery = (fixedQueryKeys ?? []).reduce((prevValue, key) => {
      prevValue[key] = query[key];
      return prevValue;
    }, {} as any);

    const url = asPath.split('?')[0];
    const routerLink = formatQueryString(url, { ...fixedQuery, ...data });
    router.push(routerLink);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <Flex gap='sm' height='50px' wrap='wrap'>
          <InputGroup as='section' maxWidth='50%'>
            {advancedSearchConfigs && (
              <Popover
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                onOpen={onOpen}
              >
                <PopoverTrigger>
                  <InputLeftElement>
                    <CustomIconBtn
                      aria-label='篩選條件'
                      backgroundColor='accent'
                      fontSize='md'
                      icon='filter'
                    />
                  </InputLeftElement>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent border='solid 1px' borderColor='line' p={5}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <Grid gap={3} templateColumns='repeat(12, 1fr)'>
                      {advancedSearchConfigs.map((fieldConfig) => (
                        <GridItem
                          key={fieldConfig.name}
                          colSpan={fieldConfig.col ?? 12}
                          position='relative'
                        >
                          <Field fieldConfig={fieldConfig} />
                        </GridItem>
                      ))}
                    </Grid>
                  </PopoverContent>
                </Portal>
              </Popover>
            )}
            <Input
              {...register('keyword')}
              borderColor='black'
              height='100%'
              id='keyword'
              paddingLeft={advancedSearchConfigs ? '12' : '3'}
              placeholder='搜尋關鍵字'
            />
            <InputRightElement
              as='section'
              backgroundColor='black'
              height='100%'
            >
              <CustomIconBtn
                aria-label='搜尋'
                backgroundColor='transparent'
                color='white'
                fontSize='xl'
                icon='search'
                type='submit'
              />
            </InputRightElement>
          </InputGroup>
          <Box
            border='1px solid'
            borderColor='black'
            fontWeight='bold'
            layerStyle='flex-center'
            paddingX='sm'
          >
            <CustomIcon marginRight='sm' name='filter' />
            篩選
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              backgroundColor='unset'
              border='1px solid'
              borderColor='black'
              height='100%'
              rightIcon={<CustomIcon marginLeft='sm' name='chevronDown' />}
              textAlign='start'
            >
              <Text
                as='span'
                display='block'
                fontSize='2xs'
                fontWeight='normal'
              >
                排序方式
              </Text>
              <Text as='span' color='text-sub' display='block' fontSize='xs'>
                {currentOrder}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setCurrentOrder('ASC')}>ASC</MenuItem>
              <MenuItem onClick={() => setCurrentOrder('DESC')}>DESC</MenuItem>
            </MenuList>
          </Menu>
          <Flex as='section' gap='sm' marginLeft='auto'>
            {extraActions}
          </Flex>
        </Flex>
      </FormProvider>
    </form>
  );
};

export default SearchForm;
