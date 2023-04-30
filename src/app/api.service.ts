import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products'));
  public products$ = toObservable(this.products);
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


