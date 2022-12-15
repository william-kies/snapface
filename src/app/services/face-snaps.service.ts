import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    constructor(private http: HttpClient) { }

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return(this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps'));
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return(this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`));
    }

    likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'dislike'): Observable<FaceSnap> {
        return(this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                likes: faceSnap.likes + (likeType === 'like' ? 1 : - 1)
            })),
            switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
        ));
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
        return(this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
            map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
            map(previousFaceSnap => ({
                ...formValue,
                likes: 0,
                createDate: new Date(),
                id: previousFaceSnap.id + 1
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
        ));
    }
}