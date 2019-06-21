import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css']
})
export class TrackItemComponent implements OnInit {
  
  @Input() trackItem: any;
  @Input() index: number;
  @Input() album: any;

  selected: boolean = false;
  playing: boolean = false;
  favorites: any[];

  constructor(private storage: StorageService, private spotify: SpotifyService) { }

  ngOnInit() {
    this.favorites = this.storage.getFavorites();    
    if (this.favorites) {
      for (let i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i].id === this.trackItem.id) {
          this.selected = true;
        }
      }
    }
    
  }

  addToFavorites() {
    // add album name and album image to trackItem
    this.trackItem.albumName = this.album.name;
    this.trackItem.albumImage = this.album.images;

    let button = document.getElementById('tooltip');
    console.log(button);
    

    console.log('trackItem:', this.trackItem);        
    if (this.selected) {    
      button.setAttribute('title', 'Remove from Favorites'); //= 'Remove from Favorites';  
      this.storage.deleteFavorite(this.trackItem);
    } else {  
      button.title = 'Add to Favorites';    
      this.storage.setFavorite(this.trackItem);
    }
    this.selected = !this.selected;
      
    // localStorage.removeItem('tracks');      // método para vaciar el localStorage               
        
    // this.spotify.putSavedTracks(item.id).subscribe(response => console.log(response))
  }

  setClasses() {
    let classes = {
      'selected': this.selected
    }        
    return classes;
  }

  setDisplay() {
    let classes = {
      'playing': this.playing
    }
    return classes;
  }

  play() {
    // let track = document.getElementById(`track${this.index}`);
    // console.log(track);
    this.playing = !this.playing;
    // track.className = 'show';
  }

}
