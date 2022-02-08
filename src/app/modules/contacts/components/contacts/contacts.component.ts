import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnChanges {
  @Input() contacts: Contact[] | null;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];
  dataSource: Contact[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['contacts'] && changes['contacts'].currentValue) {
      this.dataSource = changes['contacts'].currentValue || [];
    }
  }
}
