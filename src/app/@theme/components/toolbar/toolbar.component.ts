import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aapl-toolbar',
  templateUrl: './toolbar.component.html',
  host:{'class' : 'aapl-toolbar'}
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
