import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  artists: any[] = [];
  word: string;
  type:string = 'artist';

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe((params: Params) => {
      this.word = params['search'];
      console.log(this.word);
    });
    this.spotify.getArtists(this.word).subscribe( data => {
      console.log(data);
      this.artists = data;
      
    })
  }

}
