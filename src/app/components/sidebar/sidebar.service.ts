import { Injectable } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = false;

  menus = [
    {
      title: 'Générale',
      type: 'header'
    },
    {
      id: 1,
      title: 'Tableau de bord',
      icon: 'pi pi-palette',
      link: "admin",
      active: false,
      type: 'simple',
    },
    {
      id: 2,
      title: 'Outils',
      icon: 'pi pi-tags',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Equipements',
          link: "admin/equipments"
        },
        {
          title: 'Téléphones fixes',
          link: "admin/fix-phones"
        },
        {
          title: 'Fournitures',
          link: "admin/furnitures"
        },
        {
          title: 'Modems',
          link: "admin/modems"
        },
        {
          title: 'Cartes SIM',
          link: "admin/sim-cards"
        },
        {
          title: 'Véhicules',
          link: "admin/vehicles"
        },
      ]
    },
    {
      id: 3,
      title: 'Gestion des employés',
      icon: 'pi pi-users',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Employés',
          link: "admin/employees"
        },
        {
          title: 'Demandes',
          link: "admin/requests"
        },
        {
          title: 'Affectations',
          link: "admin/assignments"
        },
      ]
    },
    {
      id: 4,
      title: 'Configuration',
      icon: 'pi pi-cog',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Catégories',
          link: "admin/categories"
        },
        {
          title: 'Départements',
          link: "admin/departments"
        },
        {
          title: 'Fonctions',
          link: "admin/functions"
        },
      ]
    },
    {
      id: 5,
      title: 'Changer mot de passe',
      icon: 'pi pi-cog',
      link: "user/update-password",
      active: false,
      type: 'simple',
    },
  ];

  userMenus = [
    {
      title: 'Générale',
      type: 'header'
    },
    {
      id: 1,
      title: 'Tableau de bord',
      icon: 'pi pi-palette',
      link: "admin",
      active: false,
      type: 'simple',
    },
    {
      id: 2,
      title: 'Affectations',
      icon: 'pi pi-tags',
      active: false,
      type: 'simple'
    },
  ];

  constructor(private auth: AuthenticationService) { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    // return this.auth.isAdmin() ? this.menus : this.userMenus;
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  setAsActive(id) {
    for (let menu of this.menus) {
      if (menu.id === id) {
        menu.active = true;
      }
    }
  }
}
