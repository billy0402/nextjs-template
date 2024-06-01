import type { AsyncThunk, UnknownAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

function hasPrefix(action: UnknownAction, prefix: string) {
  return action.type.startsWith(prefix);
}
function hasSuffix(action: UnknownAction, suffix: string) {
  return action.type.endsWith(suffix);
}
export function getActionType(value: string, prefix: string) {
  return value.substring(prefix.length).split('/')[1];
}

export function isPendingAction(prefix: string) {
  return (action: UnknownAction): action is PendingAction =>
    hasPrefix(action, prefix) && hasSuffix(action, '/pending');
}
export function isFulfilledAction(prefix: string) {
  return (action: UnknownAction): action is FulfilledAction =>
    hasPrefix(action, prefix) && hasSuffix(action, '/fulfilled');
}
export function isRejectedAction(prefix: string) {
  return (action: UnknownAction): action is RejectedAction =>
    hasPrefix(action, prefix) && hasSuffix(action, '/rejected');
}
