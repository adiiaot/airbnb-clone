import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NopageComponent } from './nopage/nopage.component';


export const routes: Routes = [
    { path: 'home', component: HomepageComponent, title: 'Home Page'},
    { path: 'wishlist', component: WishlistComponent, title: 'Wishlist Page'},
    { path: 'login', component: LoginComponent, title: 'Login Page'},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NopageComponent},
];
