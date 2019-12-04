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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoriesEditComponent} from './components/categories/categories-edit/categories-edit.component';
import {FunctionsCreateComponent} from './components/functions/functions-create/functions-create.component';
import {FunctionsEditComponent} from './components/functions/functions-edit/functions-edit.component';
import {EmployeesIndexComponent} from './components/employees/employees-index/employees-index.component';
import {EmployeesEditComponent} from './components/employees/employees-edit/employees-edit.component';
import {EmployeesCreateComponent} from './components/employees/employees-create/employees-create.component';
import {DepartmentsIndexComponent} from './components/departments/departments-index/departments-index.component';
import {DepartmentsEditComponent} from './components/departments/departments-edit/departments-edit.component';
import {DepartmentsCreateComponent} from './components/departments/departments-create/departments-create.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PaginatorModule} from 'primeng/paginator';
import {VehiclesIndexComponent} from './components/vehicles/vehicles-index/vehicles-index.component';
import {VehiclesCreateComponent} from './components/vehicles/vehicles-create/vehicles-create.component';
import {VehiclesEditComponent} from './components/vehicles/vehicles-edit/vehicles-edit.component';
import {EquipmentsCreateComponent} from './components/equipments/equipments-create/equipments-create.component';
import {EquipmentsEditComponent} from './components/equipments/equipments-edit/equipments-edit.component';
import {EquipmentsIndexComponent} from './components/equipments/equipments-index/equipments-index.component';
import {FixPhonesCreateComponent} from './components/fix-phones/fix-phones-create/fix-phones-create.component';
import {ModemsCreateComponent} from './components/modems/modems-create/modems-create.component';
import {SimCardsCreateComponent} from './components/sim-cards/sim-cards-create/sim-cards-create.component';
import {DropdownModule} from 'primeng/dropdown';
import {FurnituresIndexComponent} from './components/furnitures/furnitures-index/furnitures-index.component';
import {FurnituresEditComponent} from './components/furnitures/furnitures-edit/furnitures-edit.component';
import {FurnituresCreateComponent} from './components/furnitures/furnitures-create/furnitures-create.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {FixPhonesIndexComponent} from './components/fix-phones/fix-phones-index/fix-phones-index.component';
import {FixPhonesEditComponent} from './components/fix-phones/fix-phones-edit/fix-phones-edit.component';
import {SimCardsIndexComponent} from './components/sim-cards/sim-cards-index/sim-cards-index.component';
import {SimCardsEditComponent} from './components/sim-cards/sim-cards-edit/sim-cards-edit.component';
import {ModemEditComponent} from './components/modems/modem-edit/modem-edit.component';
import {ModemIndexComponent} from './components/modems/modem-index/modem-index.component';
import {RequestCreateComponent} from './components/request/request-create/request-create.component';
import {LoginComponent} from './components/login/login/login.component';
import {ResetPasswordComponent} from './components/login/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './components/login/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from './components/login/change-password/change-password.component';
import {CalendarModule} from 'primeng/calendar';
import {RequestIndexComponent} from './components/request/request-index/request-index.component';
import {RequestEditComponent} from './components/request/request-edit/request-edit.component';
import {RequestsComponent} from './components/assignments/requests/requests.component';
import {AssignmentsCreateComponent} from './components/assignments/assignments-create/assignments-create.component';
import {AssignmentsIndexComponent} from './components/assignments/assignments-index/assignments-index.component';
import {RadioButtonModule} from 'primeng/primeng';
import {FuelCardsIndexComponent} from './components/fuel-cards/fuel-cards-index/fuel-cards-index.component';
import {FuelCardsCreateComponent} from './components/fuel-cards/fuel-cards-create/fuel-cards-create.component';
import {FuelCardsEditComponent} from './components/fuel-cards/fuel-cards-edit/fuel-cards-edit.component';
import {EmployeeHistoryComponent} from './components/employees/employee-history/employee-history.component';
import {ToolHistoryComponent} from './components/toos/tool-history/tool-history.component';
import {CategoriesNotAvailableComponent} from './components/categories/categories-not-available/categories-not-available.component';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BsDropdownModule} from 'ngx-bootstrap';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {CardModule} from 'primeng/card';
import { UserHistoryComponent } from './components/user-history/user-history.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  {
    path: 'admin/furnitures',
    component: FurnituresIndexComponent
  },
  {
    path: 'admin/furnitures/create',
    component: FurnituresCreateComponent
  },
  {
    path: 'admin/furnitures/:id/edit',
    component: FurnituresEditComponent
  },
  {
    path: 'admin/fuel-cards',
    component: FuelCardsIndexComponent
  },
  {
    path: 'admin/fuel-cards/create',
    component: FuelCardsCreateComponent
  },
  {
    path: 'admin/fuel-cards/:id/edit',
    component: FuelCardsEditComponent
  },
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
    path: 'admin/categories/not-available',
    component: CategoriesNotAvailableComponent
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
    path: 'admin/employees/:id/assignments',
    component: EmployeeHistoryComponent
  },
  {
    path: 'admin/tool/:id/assignments',
    component: ToolHistoryComponent
  },
  {
    path: 'admin/equipments',
    component: EquipmentsIndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/equipments/create',
    component: EquipmentsCreateComponent
  },
  {
    path: 'admin/equipments/:id/edit',
    component: EquipmentsEditComponent
  },
  {
    path: 'admin/fix-phones',
    component: FixPhonesIndexComponent
  },
  {
    path: 'admin/fix-phones/create',
    component: FixPhonesCreateComponent
  },
  {
    path: 'admin/fix-phones',
    component: FixPhonesIndexComponent
  },
  {
    path: 'admin/fix-phones/:id/edit',
    component: FixPhonesEditComponent
  },
  {
    path: 'admin/modems',
    component: ModemIndexComponent
  },
  {
    path: 'admin/modems/create',
    component: ModemsCreateComponent
  },
  {
    path: 'admin/modems/:id/edit',
    component: ModemEditComponent
  },
  {
    path: 'admin/sim-cards',
    component: SimCardsIndexComponent
  },
  {
    path: 'admin/sim-cards/create',
    component: SimCardsCreateComponent
  },
  {
    path: 'user/',
    component: UserHistoryComponent
  },
  {
    path: 'user/requests/create',
    component: RequestCreateComponent
  },
  {
    path: 'user/requests',
    component: RequestIndexComponent
  },
  {
    path: 'user/requests/:id/edit',
    component: RequestEditComponent
  },
  {
    path: 'admin/sim-cards/:id/edit',
    component: SimCardsEditComponent
  },
  {
    path: 'admin/assignments/:id/create',
    component: AssignmentsCreateComponent
  },
  {
    path: 'admin/assignments',
    component: AssignmentsIndexComponent
  },
  {
    path: 'admin/requests',
    component: RequestsComponent
  },
  {
    path: 'user/update-password',
    component: ChangePasswordComponent
  },
  {
    path: 'user/change-password/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'user/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'admin',
    component: StatisticsComponent
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
    FurnituresIndexComponent,
    FurnituresEditComponent,
    FurnituresCreateComponent,
    FixPhonesIndexComponent,
    FixPhonesEditComponent,
    FixPhonesIndexComponent,
    FixPhonesEditComponent,
    SimCardsIndexComponent,
    SimCardsEditComponent,
    ModemEditComponent,
    ModemIndexComponent,
    RequestCreateComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    RequestIndexComponent,
    RequestEditComponent,
    RequestsComponent,
    AssignmentsCreateComponent,
    AssignmentsIndexComponent,
    FuelCardsIndexComponent,
    FuelCardsCreateComponent,
    FuelCardsEditComponent,
    StatisticsComponent,
    EmployeeHistoryComponent,
    ToolHistoryComponent,
    CategoriesNotAvailableComponent,
    UserHistoryComponent,
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
    DropdownModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    CardModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    ConfirmationService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
