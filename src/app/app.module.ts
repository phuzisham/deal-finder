import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EbayProductApiService } from './ebay-product-api.service';
import { SaveProductService } from './save-product.service';
import { HeaderComponent } from './header/header.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { FooterComponent } from './footer/footer.component';
import { PricePipe } from './price.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    PublicComponent,
    PrivateComponent,
    FooterComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [EbayProductApiService, AuthGuard, AuthenticationService, SaveProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
