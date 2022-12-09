import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  userLiked!: boolean;

  ngOnInit() {
    this.buttonText = 'Like';
    this.userLiked = false;
  }

  onClickButton() {
    if (this.userLiked === false) {
      this.faceSnap.likes++;
      this.userLiked = true;
      this.buttonText = 'Dislike';
    } else {
      this.faceSnap.likes--;
      this.userLiked = false;
      this.buttonText = 'Like';
    }
  }
}
