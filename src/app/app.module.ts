import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { config } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './gallery/gallery.component';

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBuckey: config.storageBucket,
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
