import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total: number = 0;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.total = this.cartService.totalItem();
  }

}
