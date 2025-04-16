import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private apiUrl = 'https://api.spoonacular.com/recipes/random?number=5&apiKey=b03bb2eef3714deaa643ca65a8967109';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res =>
        res.recipes.map((item: any) => ({
          id: item.id,
          name: item.title,
          description: item.summary,
          price: +(Math.random() * 20 + 5).toFixed(2),
          imageUrl: item.image,
          category: item.dishTypes[0] || 'main'
        }))
      )
    );
  }
}
