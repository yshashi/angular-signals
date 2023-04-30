import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService, IProduct } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems$ = new BehaviorSubject<IProduct[]>([]);
  public cartItems = signal<IProduct[]>([]);
  public products: IProduct[] = []
  constructor(private api: ApiService) {

   }

  totalItem = computed(()=> this.cartItems().length);
  subTotal = computed(()=> this.cartItems().reduce((prev:any, curr:IProduct)=>{
    return prev + curr.price
  },0))

  addProduct(product: IProduct) {
    this.products.push(product);
    this.cartItems$.next(this.products);
  }

  add(product:IProduct){
    this.cartItems.mutate(val=>{
      val.push(product);
    });
    this.api.products()?.forEach(a=>{
      if(a.id === product.id){
        a.rating.count = a.rating.count - 1;
      }
    })
  }

  removeProduct(id: number){
    this.products.splice(id, 1);
    this.cartItems$.next(this.products);
  }

  removeProductSignal(id: number){
    this.cartItems.mutate((val)=>{
      const data = val.splice(id,1);
      this.api.products()?.forEach(a=>{
        if(data[0].id === a.id){
          a.rating.count = a.rating.count + 1;
        }
      })
    })
  }

}
