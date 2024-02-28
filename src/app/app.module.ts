import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { MaladiesComponent } from './maladies/maladies.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CategoriesComponent,
    ProposComponent,
    ContactComponent,
    MaladiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
