import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';



import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  user: Contact = {
    name: '',
    email: '',
    phone: '',
    query: ''
  }
  constructor(
    private flashMessage: FlashMessagesService,
    private contactService: ContactService,
    private router: Router
    
  ) { }

  ngOnInit() {

  }
  onSubmit({value, valid}: {value: Contact, valid: boolean}) {
    if(!valid) {
      //show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add new user

      // Show message
      this.flashMessage.show('Thank you for your query, We will call back to you ASAP!', {
        cssClass: 'alert-success', timeout: 4000
      });

      this.router.navigate(['/']);
    }
  }

}
