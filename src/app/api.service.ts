import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient) { }

getProducts(): Observable<IProduct[]>{
  return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
}

}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating:IRating;
}

interface IRating{
  rate:number;
  count:number;
}


