import type { AsyncThunk, UnknownAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

const hasPrefix = (action: UnknownAction, prefix: string) =>
  action.type.startsWith(prefix);
const hasSuffix = (action: UnknownAction, suffix: string) =>
  action.type.endsWith(suffix);
export const getActionType = (value: string, prefix: string) =>
  value.substring(prefix.length).split('/')[1];

export const isPendingAction =
  (prefix: string) =>
  (action: UnknownAction): action is PendingAction => {
    return hasPrefix(action, prefix) && hasSuffix(action, '/pending');
  };
export const isFulfilledAction =
  (prefix: string) =>
  (action: UnknownAction): action is FulfilledAction => {
    return hasPrefix(action, prefix) && hasSuffix(action, '/fulfilled');
  };
export const isRejectedAction =
  (prefix: string) =>
  (action: UnknownAction): action is RejectedAction => {
    return hasPrefix(action, prefix) && hasSuffix(action, '/rejected');
  };
