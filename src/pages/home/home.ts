import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public keyboard : Keyboard, public datePicker : DatePicker) {

  }
  
  today : any;
  openDatepicker(){
    this.keyboard.close();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.today=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()},
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
