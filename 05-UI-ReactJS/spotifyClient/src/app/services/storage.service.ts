import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favorites: any[] = [];
  
  constructor() { 
    // localStorage.setItem('tracks', JSON.stringify(this.favorites));
  }

  setFavorite(item: any) {

    if (localStorage.getItem('tracks') === null) {
      console.log('vacio y agrego');          
      this.favorites.push(item);
      localStorage.setItem('tracks', JSON.stringify(this.favorites)); 
    } else {
      console.log('no vacio y agrego');       
      this.favorites = JSON.parse(localStorage.getItem('tracks'));      
      this.favorites.push(item);
      localStorage.setItem('tracks', JSON.stringify(this.favorites));
    }
  }

  getFavorites(): any {

    if (this.favorites) {
      this.favorites = JSON.parse(localStorage.getItem('tracks'));
      console.log('favorites: ', this.favorites);    
      return this.favorites;
    } else return null;
        
  }

  deleteFavorite(item: any) {
    console.log('delete');
    let removeIndex = this.favorites.map(it => it.id).indexOf(item.id);
    this.favorites.splice(removeIndex, 1);
    console.log(this.favorites);
    localStorage.setItem('tracks', JSON.stringify(this.favorites));
  }
}
