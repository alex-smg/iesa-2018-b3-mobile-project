import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Contacts, ContactName } from '@ionic-native/contacts';
import { AddContact } from '../addcontact/addcontact';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  subject='';
  body='';
  to='';
  ContactList:any[]=[];
  phoneNumber : number;
  name = ContactName;

  avatar:string="./assets/icon/avatar.png";
  constructor(public navCtrl: NavController, private contacts:Contacts, private modalCtrl:ModalController, public emailComposer: EmailComposer, private callNumber: CallNumber) {
    this.loadcontactlist();
  }
  send(){
    let email= {
      to: this.to,
      cc: [],
      bcc: [],
      attachement: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: "Gamil"
    }
    this.emailComposer.open(email);
  }

  loadcontactlist(){

    this.contacts.find(["*"])
      .then(res => {
        console.log({funcion:'loadcontactlist',res:res})
        let datosMostar:any[]=[];
        res.map((contact) =>{
          if(contact.name != null && contact.phoneNumbers != null){
            datosMostar.push({name:contact.name,phoneNumbers:contact.phoneNumbers})
          }
        })
        console.log({funcion:'loadcontactlist',datosMostar:datosMostar})
        this.ContactList = datosMostar;
      },error => {
        console.log({error:error})
      })
  }

  modalNewContact(){
    let modal = this.modalCtrl.create(AddContact);
    modal.onDidDismiss(data => {
      console.log({dataOnDidDismiss:data});
      if(data.estado){
        console.log(data)
        this.ContactList.push({name:data.contact.name,phoneNumbers:data.contact.phoneNumbers});
      }
    });
    modal.present();
  }


  launchDialer(n:string){
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }




}
