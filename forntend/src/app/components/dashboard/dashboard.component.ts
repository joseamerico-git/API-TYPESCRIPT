import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { addTokenInterceptor } from '../../utils/add-token.interceptor';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private _productService: ProductService){

  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(data=>{
      console.log(data)
    })
  }
}
