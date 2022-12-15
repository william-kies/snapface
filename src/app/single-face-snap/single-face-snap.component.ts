import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  userLiked!: boolean;

  constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Like';
    this.userLiked = false;
    
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  onLike(faceSnapId: number) {
    if (this.userLiked === false) {
      this.faceSnap$ = this.FaceSnapsService.likeFaceSnapById(faceSnapId, 'like').pipe(
        tap(() => {
          this.userLiked = true;
          this.buttonText = 'Dislike';
        })
      );
    } else {
      this.faceSnap$ = this.FaceSnapsService.likeFaceSnapById(faceSnapId, 'dislike').pipe(
        tap(() => {
          this.userLiked = false;
          this.buttonText = 'Like';
        })
      );
    }
  }
}
