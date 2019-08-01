import { OrdersComponent } from './admin/orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'categories/:name',
    component: CategoriesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin/manage-products',
    component: ManageProductsComponent
  },
  {
    path: 'admin/orders',
    component: OrdersComponent
  },
  {
    path: 'logged-out',
    component: LoggedOutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
