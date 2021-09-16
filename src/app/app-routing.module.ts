import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './features/album/album-list/album-list.component';
import { FavouriteDetailComponent } from './features/favourite/favourite-detail/favourite-detail.component';
import { FavouriteListComponent } from './features/favourite/favourite-list/favourite-list.component';
import { TodoDetailComponent } from './features/todo/todo-detail/todo-detail.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './features/todo/todo-update/todo-update.component';
import { UserUpdateComponent } from './features/user/user-update/user-update.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: TodoListComponent },
  { path: "todos", component: TodoListComponent },
  // { path: "userTodos/:userId", component: UserTodosComponent },
  { path: "todoDetail/:id", component: TodoDetailComponent },
  { path : "userUpdate/:userId", component: UserUpdateComponent},
  { path: "favourites", component: FavouriteListComponent},
  { path: "albums", component: AlbumListComponent },
  { path: "todoUpdate/:id", component: TodoUpdateComponent },
  // { path: "todos/:pageId", component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
