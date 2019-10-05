import { Component } from '@angular/core';
import { Platform, ActionSheetController } from '@ionic/angular';


@Component({
 templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {}


  async openMenu() {

    const actionSheet = await this.actionsheetCtrl.create({
    header: 'Albums',
    cssClass: 'action-sheet-look',
    buttons: [
    {
    text: 'Delete',
    role: 'destructive',
    icon: !this.platform.is('ios') ? 'trash' : null,
    handler: () => {
    console.log('Delete clicked');
    }
    },
    {
    text: 'Share',
    icon: !this.platform.is('ios') ? 'share' : null,
    handler: () => {
    console.log('Share clicked');
    }
    },
    {
    text: 'Play',
    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
    handler: () => {
    console.log('Play clicked');
    }
    },
    {
    text: 'Favorite',
    icon: !this.platform.is('ios') ? 'heart-outline' : null,
    handler: () => {
    console.log('Favorite clicked');
    }
    },
    {
    text: 'Cancel',
    role: 'cancel', 
 icon: !this.platform.is('ios') ? 'close' : null,
 handler: () => {
 console.log('Cancel clicked');
 }
 }
 ]
 });

    await actionSheet.present();
 }
}
