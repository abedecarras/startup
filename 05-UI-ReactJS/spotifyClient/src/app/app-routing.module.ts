import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ArtistsListComponent } from "./components/artists-list/artists-list.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { AlbumComponent } from "./components/album/album.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistsListComponent},
  { path: 'artists/:search', component: ArtistsListComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'album/:id', component: AlbumComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
