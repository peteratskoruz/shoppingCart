import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ProductService} from './product.service';
import {StateService} from './state.service';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AutocompleteComponent } from './pages/autocomplete/autocomplete.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import {AuthGuard} from './auth.guard';
import {LeavecheckGuard} from './leavecheck.guard';
import {MyData} from './mydata.resolve';
import { AnimationComponent } from './pages/animation/animation.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        resolve: [MyData]
    },
    {
        path: 'details/:productId',
        component: ProductDetailsComponent
    },
    {
        path: 'autocomplete',
        component: AutocompleteComponent
    },
    {
        path: 'addproduct',
        component: AddProductComponent,
        canActivate: [AuthGuard],
        canDeactivate: [LeavecheckGuard]
    },
    {
        path: 'animation',
        component: AnimationComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductDetailsComponent,
    AutocompleteComponent,
    AddProductComponent,
    AnimationComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
      ProductService,
      StateService,
      AuthGuard,
      LeavecheckGuard,
      MyData],
  bootstrap: [AppComponent]
})
export class AppModule { }
