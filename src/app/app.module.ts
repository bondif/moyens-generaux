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
import { FunctionsCreateComponent } from './components/functions/functions-create/functions-create.component';
import { FunctionsEditComponent } from './components/functions/functions-edit/functions-edit.component';
import { EmployeesIndexComponent } from './components/employees/employees-index/employees-index.component';
import { EmployeesEditComponent } from './components/employees/employees-edit/employees-edit.component';
import { EmployeesCreateComponent } from './components/employees/employees-create/employees-create.component';
import { DepartmentsIndexComponent } from './components/departments/departments-index/departments-index.component';
import { DepartmentsEditComponent } from './components/departments/departments-edit/departments-edit.component';
import { DepartmentsCreateComponent } from './components/departments/departments-create/departments-create.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PaginatorModule} from 'primeng/paginator';
import { VehiclesIndexComponent } from './components/vehicles/vehicles-index/vehicles-index.component';
import { VehiclesCreateComponent } from './components/vehicles/vehicles-create/vehicles-create.component';
import { VehiclesEditComponent } from './components/vehicles/vehicles-edit/vehicles-edit.component';
import { EquipmentsCreateComponent } from './components/equipments/equipments-create/equipments-create.component';
import { EquipmentsEditComponent } from './components/equipments/equipments-edit/equipments-edit.component';
import { EquipmentsIndexComponent } from './components/equipments/equipments-index/equipments-index.component';
import { FixPhonesCreateComponent } from './components/fix-phones/fix-phones-create/fix-phones-create.component';
import { ModemsCreateComponent } from './components/modems/modems-create/modems-create.component';
import { SimCardsCreateComponent } from './components/sim-cards/sim-cards-create/sim-cards-create.component';

const routes: Routes = [
  {
    path: 'admin/vehicles',
    component: VehiclesIndexComponent
  },
  {
    path: 'admin/vehicles/create',
    component: VehiclesCreateComponent
  },
  {
    path: 'admin/vehicles/:id/edit',
    component: VehiclesEditComponent
  },
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
  {
    path: 'admin/functions/create',
    component: FunctionsCreateComponent
  },
  {
    path: 'admin/functions/:id/edit',
    component: FunctionsEditComponent
  },
  {
    path: 'admin/departments',
    component: DepartmentsIndexComponent
  },
  {
    path: 'admin/departments/create',
    component: DepartmentsCreateComponent
  },
  {
    path: 'admin/departments/:id/edit',
    component: DepartmentsEditComponent
  },
  {
    path: 'admin/employees',
    component: EmployeesIndexComponent
  },
  {
    path: 'admin/employees/create',
    component: EmployeesCreateComponent
  },
  {
    path: 'admin/employees/:id/edit',
    component: EmployeesEditComponent
  },
  {
    path: 'admin/equipments',
    component: EquipmentsIndexComponent
  },
  {
    path: 'admin/equipments/create',
    component: EquipmentsCreateComponent
  },
  {
    path: 'admin/equipments/:id/edit',
    component: EmployeesEditComponent
  },
  {
    path: 'admin/fix-phones/create',
    component: FixPhonesCreateComponent
  },
  {
    path: 'admin/modems/create',
    component: ModemsCreateComponent
  },
  {
    path: 'admin/sim-cards/create',
    component: SimCardsCreateComponent
  }
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
    FunctionsCreateComponent,
    FunctionsEditComponent,
    EmployeesIndexComponent,
    EmployeesEditComponent,
    EmployeesCreateComponent,
    DepartmentsIndexComponent,
    DepartmentsEditComponent,
    DepartmentsCreateComponent,
    VehiclesIndexComponent,
    VehiclesCreateComponent,
    VehiclesEditComponent,
    EquipmentsCreateComponent,
    EquipmentsEditComponent,
    EquipmentsIndexComponent,
    FixPhonesCreateComponent,
    ModemsCreateComponent,
    SimCardsCreateComponent,
>>>>>>> 3e0f6279a584baef2c2a659f082c07d5acbfa0bb
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    AutoCompleteModule,
    PaginatorModule,
    InputTextModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
