import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar"},
  { path: "contact", component: ContactComponent },
  { path: "addProvider", component: ProviderAddComponent,canActivate: [AuthGaurdService] },
  { path: "listProvider", component: ProviderListComponent,canActivate: [AuthGaurdService] },
  { path: "updateProvider/:id", component: ProviderUpdateComponent ,canActivate: [AuthGaurdService]},
  { path: "listArticle", component: ArticleListComponent,canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'logout', component: LogoutComponent,canActivate: [AuthGaurdService] },
  { path: 'dashboard/admin', component: DashboardAdminComponent},
  { path: 'dashboard/manager', component: DashboardManagerComponent },
  { path: 'dashboard/user',  component: DashboardUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
