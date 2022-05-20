import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanregisterComponent } from './loanregister/loanregister.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'loanform', component: LoanregisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
