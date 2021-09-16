import { Action } from "@ngrx/store";
import { Album } from "src/app/models/album";

export enum FavouriteActionTypes{
    ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE",
    REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
}

export class AddToFavourite implements Action{
    type: string = FavouriteActionTypes.ADD_TO_FAVOURITE;

    constructor(public payload: Album){}
}

export class RemoveFromFavourite implements Action{
    type: string = FavouriteActionTypes.REMOVE_FROM_FAVOURITE;

    constructor(public payload: Album){}
}

export type FavouriteActions = AddToFavourite | RemoveFromFavourite;