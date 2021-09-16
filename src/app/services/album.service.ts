import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  apiUrl = "http://localhost:3000/albums";

  constructor(private httpClient: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(this.apiUrl);
  }
}
