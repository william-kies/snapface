import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Astronaute',
        description: 'Astronaute nageant dans un océan de couleurs.',
        imageUrl: 'https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d',
        createDate: new Date(),
        likes: 389,
        location: 'Dans l\'espace'
      },
      {
        title: 'Forêt boréale',
        description: 'Peinture d\'une forêt boréale, lieu méconnu en pleine nature.',
        imageUrl: 'https://i.redd.it/wrywjpghzgi11.png',
        createDate: new Date(),
        likes: 86
      },
      {
        title: 'Nature dans une ampoule',
        description: 'Photo d\'un espace naturel présent seulement dans le bulbe d\'une ampoule.',
        imageUrl: 'https://moewalls.com/wp-content/uploads/2022/03/nature-in-a-lightbulb-thumb.jpg',
        createDate: new Date(),
        likes: 47
      }
    ];
  }
}