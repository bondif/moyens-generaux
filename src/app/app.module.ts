import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ContainerComponent} from './components/container/container.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesIndexComponent} from './components/categories/categories-index/categories-index.component';
import {FunctionsIndexComponent} from './components/functions/functions-index/functions-index.component';
import {InputTextModule} from 'primeng/inputtext';
import {CategoriesCreateComponent} from './components/categories/categories-create/categories-create.component';
import {FormsModule} from '@angular/forms';
import { CategoriesEditComponent } from './components/categories/categories-edit/categories-edit.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoriesIndexComponent
  },
  {
    path: 'admin/categories/create',
    component: CategoriesCreateComponent
  },
  {
    path: 'admin/categories/:id/edit',
    component: CategoriesEditComponent
  },
  {
    path: 'admin/functions',
    component: FunctionsIndexComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContainerComponent,
    CategoriesIndexComponent,
    FunctionsIndexComponent,
    CategoriesCreateComponent,
    CategoriesEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
