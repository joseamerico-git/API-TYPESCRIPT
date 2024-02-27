import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';

import { Product } from '../../interfaces/produto';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule,NgFor,NgIf],
  
  

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
   
  listProdutos:any[]=[];
 
  constructor(private _productService: ProductService){
   

  }
  ngOnInit(): void {
  this.getProducts()
  
  }

 

  getProducts():void{
    this._productService.getAll().subscribe(data=>{
      
      console.log(data)
    
      
      this.listProdutos = data;
      
    })

    

    
  }
}
