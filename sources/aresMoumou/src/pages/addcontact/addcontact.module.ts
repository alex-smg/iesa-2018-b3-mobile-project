import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContact } from './addcontact';
import { Contacts } from '@ionic-native/contacts';
@NgModule({
  declarations: [
    AddContact,
  ],
  imports: [
    IonicPageModule.forChild(AddContact),
  ],
  exports: [
    AddContact
  ],
  providers:[Contacts]
})
export class AddcontactModule {}
