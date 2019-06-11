import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
name:string;
//type: string;
//placeholder:string;
/*
async presentAlert(){
  const alert =await this.alertCtrl.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'this is alert message',
    inputs:[
     { name:'txtTitulo',
      type: 'text',
      placeholder: 'Escribe un titulo'}
    ],
    buttons:[
      {
        text:'Aceptar',
        handler:(data)=>{
          this.name=data.txtTitulo;
        }
      }
    ]
  });
  await alert.present();
}*/


}
