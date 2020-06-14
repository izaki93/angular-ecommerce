import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProdcutCategories();
  }

  listProdcutCategories() {
    return this.productService.getProdcutCategories().subscribe(
      data => {
        console.log(`Product Categories = ${JSON.stringify(data)}`);
        this.productCategories = data;
      });
  }

}
