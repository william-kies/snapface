import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  userLiked!: boolean;

  constructor(private FaceSnapsService: FaceSnapsService, private route: Router) { }

  ngOnInit() {
    this.buttonText = 'Like';
    this.userLiked = false;
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

  onViewFaceSnap() {
    this.route.navigateByUrl(`snapface/${this.faceSnap.id}`);
  }
}
