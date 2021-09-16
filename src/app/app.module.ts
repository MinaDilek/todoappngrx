import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './features/album/album-list/album-list.component';
import { FavouriteListComponent } from './features/favourite/favourite-list/favourite-list.component';
import { FavouriteDetailComponent } from './features/favourite/favourite-detail/favourite-detail.component';
import { TodoNavbarComponent } from './features/navbar/todo-navbar/todo-navbar.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './features/todo/todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './features/todo/todo-update/todo-update.component';
import { UserTodosComponent } from './features/todo/user-todos/user-todos.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserUpdateComponent } from './features/user/user-update/user-update.component';
import { UserNewComponent } from './features/user/user-new/user-new.component';
import { StoreModule } from '@ngrx/store';
import { favouriteReducer } from './store/reducers/favourite-reducer';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    FavouriteListComponent,
    FavouriteDetailComponent,
    TodoNavbarComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoUpdateComponent,
    UserTodosComponent,
    UserListComponent,
    UserUpdateComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { favouriteReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
