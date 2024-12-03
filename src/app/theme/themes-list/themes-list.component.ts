import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class CatalogListComponent implements OnInit{
  themes: Theme[] = [];
  isLoading = true;
  constructor(private apiService: ApiService){

  }
  ngOnInit(){
    this.apiService.getThemes().subscribe((themes) => {
      
      this.themes = themes;
      this.isLoading = false;
      console.log({themes});
    });
  }
}
