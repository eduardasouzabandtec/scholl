import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './app-classes.component.html',
  styleUrls: ['./app-classes.component.scss']
})

export class AppClassesComponent implements OnInit {

  taskscards = [
    {
      title: "Japan Culture",
      urlImagem: "../../../assets/icon/japan.png",
      typeColorCard: "green",

    },
    {
      title: "Vege Lovers",
      urlImagem: "../../../assets/icon/avocado.png ",
      typeColorCard: "rose",

    },
    {
      title: "Master Volleyball",
      urlImagem: "../../../assets/icon/soccer-ball.png",
      typeColorCard: "blue",

    },
    {
      title: "Class 2C",
      urlImagem: "../../../assets/icon/unicorn.png",
      typeColorCard: "green",

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
