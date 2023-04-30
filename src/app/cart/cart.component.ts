import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: IProduct[] = [];
  constructor(public cartService: CartService) { }

  ngOnInit() {

  }

  remove(i: number){
    this.cartService.removeProductSignal(i);
  }

}
