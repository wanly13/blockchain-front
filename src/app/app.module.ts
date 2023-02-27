import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ShowComponent } from './pages/show/show.component';

@NgModule({
  declarations: [AppComponent,
                HomeComponent,
                ShowComponent,
                AddComponent,
                SearchComponent,
                EditComponent,
                GenerateComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
