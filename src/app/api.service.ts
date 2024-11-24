import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Post } from './types/post';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(limit?: number){
    const {apiUrl} = environment;

    let url = `${apiUrl}/posts`

    if ( limit ){
      url += `?limit=${limit}`
    }
    return this.http.get<Post[]>(url);
  }
}
