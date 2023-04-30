import { HttpClient } from '@angular/common/http';
import { Injectable, signal, } from '@angular/core';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products'));
  constructor(private http: HttpClient) {

  }
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate: number;
  count: number;
}


