import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder: string;
  artists: any[] = [];
  type:string = 'artist';


  constructor(private spotify: SpotifyService, private router: Router) { }

  ngOnInit() {
  }

  search(word: string) {
    console.log(word);
    
    this.spotify.getArtists(word).subscribe( data => {
      console.log(data);
      this.artists = data;
      
    })
  }

  onEnter(word: string) {
    console.log(word);
    
    this.router.navigate(['/artists', word]);
  }

}
