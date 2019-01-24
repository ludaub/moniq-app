import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { AppService } from './app.service';
import { CollectionComponent } from './collection/collection.component';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSidenavModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    NavComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AppService,
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
