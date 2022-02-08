import { createAction, props } from '@ngrx/store';
import { Contact } from '../interfaces/contact.interface';

export const addContact = createAction(
  '[CONCTACTS] Add contact',
  props<{ contact: Contact }>()
);
export const updateContact = createAction(
  '[CONCTACTS] Update contact',
  props<{ updatedContact: Contact; contactId: number }>()
);
export const deleteContact = createAction(
  '[CONCTACTS] Delete contact',
  props<{ contactId: number }>()
);
