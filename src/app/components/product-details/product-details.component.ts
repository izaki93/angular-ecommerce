import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
        this.handleProductDetails();
    });
  }
  handleProductDetails() {
    const productId: number = +this.route.snapshot.paramMap.get('id');
    return this.productService.getProductDetails(productId).subscribe(
      data => {
        this.product = data;
      });
  }

  addToCart(product: Product) {
    console.log(`Adding to cart : ${product.name}, ${product.unitPrice} `);
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }
}
