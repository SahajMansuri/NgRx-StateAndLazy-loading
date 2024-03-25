import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  title:string=' standalone With Lazy Loading...'
  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchProducts();
  }

  fetchProducts() {
    // this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
    //   this.products = res.products
    // });
  }
}
