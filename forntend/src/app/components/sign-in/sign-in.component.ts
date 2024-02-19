import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,
    FormsModule, ToastrModule
    ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  username:string = '';
  password:string = '';
  confirmPassword:string = '';
 
  constructor (private toastr: ToastrService) {
    
  }


  ngOnInit(): void {
   
  }

  addUser(): void{
    // Validar se o usuário adicionou valores nos campos

    if(this.username == '' || this.password == '' || this.confirmPassword ==''){
      this.toastr.error("Todos os campos devem ser preenchidos","Error")
      return;
    }

    // Validar se as passwords são iguais

    if(this.password!= this.confirmPassword){
      this.toastr.error("As senhas não estão iguais!")
    }else{
      this.toastr.success("As senhas estão ok!")
    }

  }
  

}
