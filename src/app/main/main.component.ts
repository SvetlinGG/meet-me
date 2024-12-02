import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
//import { CatalogListComponent } from '../theme/themes-list/themes-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostsComponent, /*CatalogListComponent*/],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
