import { Component, OnInit } from '@angular/core';
import { ApiService, IProduct } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];
  constructor(public api: ApiService, private castService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: IProduct){
    this.castService.addProductSignal(product);
  }

}
