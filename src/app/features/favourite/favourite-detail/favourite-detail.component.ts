import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-favourite-detail',
  templateUrl: './favourite-detail.component.html',
  styleUrls: ['./favourite-detail.component.css']
})
export class FavouriteDetailComponent implements OnInit {

  favourites: Album[] = [];
  constructor(private favouriteService: FavouriteService) { }

  ngOnInit(): void {
    this.favourites = this.favouriteService.getFavourites();
  }
}
