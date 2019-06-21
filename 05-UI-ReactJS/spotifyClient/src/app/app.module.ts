import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { AlbumComponent } from './components/album/album.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { SearchNavBarComponent } from './components/shared/search-nav-bar/search-nav-bar.component';
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { TrackItemComponent } from './components/track-item/track-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    ArtistComponent,
    NavBarComponent,
    SearchBarComponent,
    NoImagePipe,
    AlbumComponent,
    ArtistsListComponent,
    SearchNavBarComponent,
    SafeDomPipe,
    TrackItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
