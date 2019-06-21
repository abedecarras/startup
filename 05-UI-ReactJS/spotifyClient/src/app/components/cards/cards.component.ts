import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[];
  @Input() type: string;

  constructor(private router: Router, private spotify:SpotifyService) { }

  ngOnInit() {
      console.log('card-type: ',this.type);
  }

  goPage(item: any) {
    
      let itemId: number;

      if ( item.type === 'artist' ) {
        itemId = item.id;
      } else {
        itemId = item.artists[0].id;
      }

      if (item.type === 'album') {
        itemId = item.id;  
      }

      this.router.navigate([`/${this.type}`, itemId]);
        
  }

}
