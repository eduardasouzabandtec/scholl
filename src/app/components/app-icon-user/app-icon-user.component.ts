import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-user',
  templateUrl: './app-icon-user.component.html',
  styleUrls: ['./app-icon-user.component.scss']
})

export class AppIconUserComponent implements OnInit {

  //sera recebido pelo input
   users = [
    {
      img: "../../../assets/icon/unicorn.png"
    },
    {
      img: "../../../assets/icon/unicorn.png"
    },
    {
      img: "../../../assets/icon/unicorn.png"
    },
    {
      img: "../../../assets/icon/soccer-ball.png"
    },
    {
      img: "../../../assets/icon/soccer-ball.png"
    },
    {
      img: "../../../assets/icon/soccer-ball.png"
    },
    {
      img: "../../../assets/icon/avocado.png"
    },
    {
      img: "../../../assets/icon/japan.png"
    }
  ]

  usersForShow = this.users?.slice(this.users?.length -3, this.users?.length);

  totalUsuarios = this.users.length - 3;



  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
