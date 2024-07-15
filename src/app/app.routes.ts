import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { accountAccessGuard } from './account-access.guard';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainingComponent } from './training/training.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [accountAccessGuard] },
  { path: 'trainer', component: TrainerComponent, canActivate: [accountAccessGuard] },
  { path: 'technology', component: TechnologyComponent, canActivate: [accountAccessGuard] },
  { path: 'training', component: TrainingComponent, canActivate: [accountAccessGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
 

];
