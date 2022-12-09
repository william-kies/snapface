import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;
  userLiked!: boolean;

  constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Like';
    this.userLiked = false;
    
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  onClickButton() {
    if (this.userLiked === false) {
      this.FaceSnapsService.likeFaceSnapById(this.faceSnap.id, 'like');
      this.userLiked = true;
      this.buttonText = 'Dislike';
    } else {
      this.FaceSnapsService.likeFaceSnapById(this.faceSnap.id, 'dislike');
      this.userLiked = false;
      this.buttonText = 'Like';
    }
  }
}
