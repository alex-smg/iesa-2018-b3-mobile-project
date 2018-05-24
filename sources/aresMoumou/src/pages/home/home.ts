import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera, private contacts: Contacts ) {
  }

    takePhoto(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }
    accessContacts(){
      let contact: Contact = this.contacts.create();

      contact.name = new ContactName(null, 'Smith', 'John');
      contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
      contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
    }
}
