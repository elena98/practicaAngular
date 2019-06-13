import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})
export class PopPage implements OnInit {

  argumento = null;

  constructor(
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.argumento=this.activatedRouter.snapshot.paramMap.get('id');
  }

}
