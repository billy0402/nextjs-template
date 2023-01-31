import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/models/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
