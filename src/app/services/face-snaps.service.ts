import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Astronaute',
            description: 'Astronaute nageant dans un océan de couleurs.',
            imageUrl: 'https://external-preview.redd.it/XrrqA4tXSxpfTl8M2AGNssZpks3MJwQ2LuDzNnsam64.png?format=pjpg&auto=webp&s=4c016353dcadabee95600f4bb833ce138b02894d',
            createDate: new Date(),
            likes: 0,
            location: 'Dans l\'espace'
        },
        {
            id: 2,
            title: 'Forêt boréale',
            description: 'Peinture d\'une forêt boréale, lieu méconnu en pleine nature.',
            imageUrl: 'https://i.redd.it/wrywjpghzgi11.png',
            createDate: new Date(),
            likes: 0
        },
        {
            id: 3,
            title: 'Nature dans une ampoule',
            description: 'Photo d\'un espace naturel présent seulement dans le bulbe d\'une ampoule.',
            imageUrl: 'https://moewalls.com/wp-content/uploads/2022/03/nature-in-a-lightbulb-thumb.jpg',
            createDate: new Date(),
            likes: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return(this.faceSnaps);
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return(faceSnap);
        }
    }

    likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'dislike'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        likeType === 'like' ? faceSnap.likes++ : faceSnap.likes--;
    }
}