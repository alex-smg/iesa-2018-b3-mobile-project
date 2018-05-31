///<reference path="../../../node_modules/@ionic-native/contacts/index.d.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddContact {
  datos:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts:Contacts,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContact');
  }

  creercontact(){
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, null, this.datos['nom']);
    contact.phoneNumbers = [new ContactField(this.datos['type'], this.datos['numero'])];
    contact.save().then(
      () => {
        console.log('Contact save!', contact)
        this.dismiss({estado:true,contact:contact});
      },
      (error: any) => {
        console.error('Error ', error)
        this.dismiss({estado:false});
      }
    );
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
