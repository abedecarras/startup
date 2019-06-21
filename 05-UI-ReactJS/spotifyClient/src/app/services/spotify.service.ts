import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    let headers = new HttpHeaders({
    Authorization:
    "Bearer BQC-6sCCDfTRcnInf2knqEyGROiw_QTfK7umE0k_rPy8hbGyws1gYUYsnIUmIDuMFhxntIgO1AgZnoARdYk",
    });
    
  // headers.append('Access-Control-Allow-Origin', '*'),
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  // headers.append("X-Requested-With", "XMLHttpRequest");
  // debugger

    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
  return this.getQuery(`artists/${id}`)
  // .pipe( map( data => data['artists'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getAlbums(id: string) {
    return this.getQuery(`artists/${id}/albums`)
    .pipe(map(data =>
        {
         console.log(data);
         return data['items'];          
        })
    );
  }

  getAlbum(id: string) {
    return this.getQuery(`albums/${id}`)
  }

  getSavedTracks() {
    return this.getQuery(`me/tracks`).pipe(
      map(data => 
        {console.log(data['items']);
        return data['items']
        })        
    );
  }

  putSavedTracks(id: string) {
    const url = `https://api.spotify.com/v1/me/tracks?ids=${id}`;

    let headers = new HttpHeaders({
    Authorization:
    "Bearer BQCmLxb8h1-zSCJpXzQYg0Ll1WBzb6onoOKaWB9nl5Y4FW5A8ia0iQY3fcMInUCuRrbocT8CYNKLIN2wJlVDTJ4s7rU9gmdBIkyYlNKVYvrqxOXO8mFj5XuKSKYSaOl-0cnfPiIRJeKn853mDuUfKym4It65_jKu3n6venECPOs5pDVxeE2qaA2jfDbyHpO7cnduQ-34xYL00inIwAaxlWf5HWsVTtVyVJRIv_P_eZNT-nkdl_tGL0gNVMYloSC4ek4v20Ml-W1W3esbOXwY3cSt",
    Accept: "application/json",
    'Content-Type': "application/json"
    });
    
    return this.http.put(url, headers); 
  }

}
