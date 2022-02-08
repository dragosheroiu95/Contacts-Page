import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../interfaces/contact.interface';
import { ContactState } from '../../store/contacts.reducer';
import { selectConctacts } from '../../store/contacts.selectors';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]> = this.store.select(selectConctacts())

  constructor(private store: Store<{ contacts: ContactState[] }>) {
    
  }

  ngOnInit(): void {}
}
