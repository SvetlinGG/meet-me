import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'profile', component: ProfileComponent},

    { path: 'themes', children: [
        {path: '', component: MainComponent},
        { path: ':themeId', component: CurrentThemeComponent},
    ]},
    { path: 'add-theme', component: AddThemeComponent},
    
    { path: '404', component: ErrorComponent},
    { path: '**', redirectTo: '/404'},
];
