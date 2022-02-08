import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactState } from './contacts.reducer';

const selectContactsState = createFeatureSelector<ContactState>('contacts');

export const selectConctacts = () =>
  createSelector(
    selectContactsState,
    state => state.contacts
  );
