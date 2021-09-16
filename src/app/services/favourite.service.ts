import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { FavouriteAlbums } from '../models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }

  getFavourites(): Album[]{
    return FavouriteAlbums;
  }

  addToFavourites(album: Album){
    let found = FavouriteAlbums.find(a => a.id === album.id);

    if(found){
      return false;
    }else{
      FavouriteAlbums.push(album);
      console.log(FavouriteAlbums);
      return true;
    }
  }

  removeFromFavourites(album: Album){
    let item = FavouriteAlbums.find(a => a.id === album.id);
    if(item){
      FavouriteAlbums.splice(FavouriteAlbums.indexOf(item), 1);
    }
  }
}
