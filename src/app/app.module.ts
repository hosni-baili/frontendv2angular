import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefixNomPipe } from './prefix-nom.pipe';
import { ContactComponent } from './contact/contact.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PrefixNomPipe,
    ContactComponent,
    ProviderListComponent,
    ProviderAddComponent,
    ProviderUpdateComponent,
    NavbarComponent,
    ArticleListComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    DashboardAdminComponent,
    DashboardManagerComponent,
    DashboardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
