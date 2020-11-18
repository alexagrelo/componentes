import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    },
    {
      name: 'warning',
      selected: false
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'light',
      selected: false
    },
    {
      name: 'medium',
      selected: false
    },
    {
      name: 'dark',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check) {
    console.log(check);
  }

}
