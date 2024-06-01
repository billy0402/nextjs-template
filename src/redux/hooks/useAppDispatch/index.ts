import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/redux/models/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
