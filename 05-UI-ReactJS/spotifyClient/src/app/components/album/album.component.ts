import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  albumId: string;
  album: any;  
  tracks: any[];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.albumId = params['id'];
    });
    this.spotify.getAlbum(this.albumId).subscribe( album => {      
      this.album = album;  
      this.tracks = this.album.tracks.items; 
    });        
  }

  sort() {
    this.tracks.sort((a, b) => (a.duration_ms > b.duration_ms) ? 1 : -1);  
  }

}
