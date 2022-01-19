import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './app-card-task.component.html',
  styleUrls: ['./app-card-task.component.scss']
})
export class AppCardTaskComponent implements OnInit {

  @Input() title= "";
  @Input() urlimageicon = "";
  @Input() typecolor = ""
  constructor() { }

  ngOnInit(): void {
  }

}
