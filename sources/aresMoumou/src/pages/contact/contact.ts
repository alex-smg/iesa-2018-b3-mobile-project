import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  subject='';
  body='';
  to='';
  constructor(public navCtrl: NavController, public emailComposer: EmailComposer) {

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

}
