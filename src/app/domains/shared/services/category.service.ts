import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

getAllCategories() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }

  getCategoryById(id: string) {
    return this.http.get<Category>(`https://api.escuelajs.co/api/v1/categories/${id}`);
  }

}
