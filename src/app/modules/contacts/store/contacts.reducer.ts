import { Action, createReducer, on } from '@ngrx/store';
import { Contact } from '../interfaces/contact.interface';
import { addContact, deleteContact, updateContact } from './contacts.actions';

export interface ContactState {
  contacts: Contact[];
}

export const initialState: () => ContactState = () => ({
  contacts: [
    {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      email: 'email@email.com',
      favourite: 'tennis',
      phone: '+40777777777'
    }
  ]
});

const _contactsReducer = createReducer(
  initialState(),
  on(addContact, (state, { contact }) => {
    return {
      contacts: [...state.contacts, contact]
    };
  }),
  on(deleteContact, (state, { contactId }) => {
    return {
      contacts: state.contacts.filter(contact => contact.id !== contactId)
    };
  }),
  on(updateContact, (state, { contactId, updatedContact }) => {
    const existingContactIndex = state.contacts.findIndex(
      contact => contact.id === contactId
    );
    const newContacts = state.contacts.filter(
      contact => contact.id !== contactId
    );
    return {
      contacts: newContacts.splice(existingContactIndex, 0, updatedContact)
    };
  })
);

export function contactsReducer(
  state: ContactState | undefined,
  action: Action
) {
  return _contactsReducer(state, action);
}
