import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { FavouriteService } from 'src/app/services/favourite.service';

import * as FavouriteActions from '../../../store/actions/favourite-actions';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  
  favourites: Album[] = [];

  constructor(private favouriteService: FavouriteService, private store: Store<any>) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(){
    this.store.select("favouriteReducer").subscribe(state => this.favourites = state)
  }

  removeFromFavourites(item : Album){
    this.store.dispatch(new FavouriteActions.RemoveFromFavourite(item));
  }

}
