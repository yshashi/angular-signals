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
  constructor(private api: ApiService, private castService: CartService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProducts()
    .subscribe(res=>{
      this.products = res;

    })
  }

  addToCart(product: IProduct){
    this.castService.add(product);
  }

}
