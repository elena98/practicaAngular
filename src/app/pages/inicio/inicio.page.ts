import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[]=[{
    nombre:'Alert',
    icono:'american-football',
    url:'/alert'
  },
  {
    nombre:'Action Sheet',
    icono:'appstore',
    url:'/action-sheet'
  }
  ,
  {
    nombre:'Avatar',
    icono:'appstore',
    url:'/avatar'
  }  ,
  {
    nombre:'Button',
    icono:'appstore',
    url:'/button'
  } ,
  {
    nombre:'Fap',
    icono:'appstore',
    url:'/fab'
  },
  {
    nombre:'Check',
    icono:'checkmark-circle-outline',
    url:'/check'
  },
  {
    nombre:'Grid',
    icono:'checkmark-circle-outline',
    url:'/grid'
  },
  {
    nombre:'Infinite',
    icono:'infinite',
    url:'/infinite'
  },
  {
    nombre:'Navegacion',
    icono:'infinite',
    url:'/navegacion'
  },
  {
    nombre:'POPOVER',
    icono:'infinite',
    url:'/popover'
  },
  {
    nombre:'Loading',
    icono:'infinite',
    url:'/loading'
  },
  {
    nombre:'Range',
    icono:'infinite',
    url:'/range'
  }
];



  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  nombre:string;
  icono:string;
  url:string;
}
