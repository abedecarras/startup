import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favoritesSongs: any[] = [];  
  error: boolean;
  mensajeError: string;
  type: string = 'songs';

  constructor(private spotify: SpotifyService, private storage: StorageService) { }

  ngOnInit() {
    this.error = false;
    // this.spotify.getSavedTracks()
    //   .subscribe( (data: any) => {
    //     console.log(data);
    //     this.favoritesSongs = data;
    //     }, ( errorServicio ) => {
    //       this.error = true;
    //       console.log(errorServicio);
    //       this.mensajeError = errorServicio.error.error.message;          
    //     });

    this.favoritesSongs = this.storage.getFavorites();
  }

}
