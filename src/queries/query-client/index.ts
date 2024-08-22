import { createStandaloneToast } from '@chakra-ui/react';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const { toast } = createStandaloneToast();

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast({
        status: 'error',
        title: 'Oops! Something went wrong!',
        description: error.message,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      toast({
        status: 'error',
        title: 'Oops! Something went wrong!',
        description: error.message,
      });
    },
  }),
});
