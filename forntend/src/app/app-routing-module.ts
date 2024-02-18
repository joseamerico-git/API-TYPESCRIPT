import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'sigIn',component:SignInComponent},
    {path:'**',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}) 
export class AppRoutingModule{}