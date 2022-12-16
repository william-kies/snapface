import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";

/**
 * ! - Erreur dans la constante, je ne doit pas pouvoir écrire "facesnaps/" devant les routes ! Je sais pas pourquoi je doit le spécifier étant donné que je fais un forChild(), cela
 * ! perd tout le principe du Lazy Loading -
 */
const routes: Routes = [
    { path: 'facesnaps/create', component: NewFaceSnapComponent },
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FaceSnapsRoutingModule { }