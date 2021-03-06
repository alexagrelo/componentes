import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ) {
    console.log(event);
    this.porcentaje = event.detail.value / 100;
    console.log('porcentaje: ', this.porcentaje );
  }

}
