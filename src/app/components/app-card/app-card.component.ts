import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="container">
  
  <ng-content></ng-content>
  
  </div>
  `,
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
