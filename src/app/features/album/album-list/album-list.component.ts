import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/album.service';
import { FavouriteService } from 'src/app/services/favourite.service';

import * as FavouriteActions from '../../../store/actions/favourite-actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {



  albums: Album[] = [];

  constructor(private albumService: AlbumsService, private favouriteService: FavouriteService, private store: Store<any>) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => this.albums = data)
  }

  addToFavourites(album: Album){
    this.store.dispatch(new FavouriteActions.AddToFavourite(album));
  }
}
