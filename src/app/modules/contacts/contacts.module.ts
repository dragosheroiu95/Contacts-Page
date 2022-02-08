import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent as ContactsContainer } from './containers/contacts/contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { contactsReducer } from './store/contacts.reducer';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [ContactsComponent];
const containers = [ContactsContainer];

@NgModule({
  declarations: [...components, ...containers, ContactFormComponent],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ContactsRoutingModule,
    MatTableModule,
    StoreModule.forFeature('contacts', contactsReducer)
  ]
})
export class ContactsModule {}
