import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  albums: any = {};
  type: string = 'album';

  constructor(private spotify: SpotifyService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getArtist(params['id']); 
      this.getAlbums(params['id']);
    });
  }

  getArtist(id: string) {
    console.log('artistId: ', id);
    
    this.spotify.getArtist(id).subscribe( artist => {
      console.log('artist:', artist);      
      this.artist = artist;
    });

  }

  getAlbums(id: string) {
    this.spotify.getAlbums(id).subscribe( album => {
              console.log('albums',album);
              this.albums = album;
            });
  }

}
