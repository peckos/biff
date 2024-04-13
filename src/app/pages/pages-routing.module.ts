import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users2',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule)
  },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
