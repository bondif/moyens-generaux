import { Injectable } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {

  constructor(private confirmationService: ConfirmationService) { }

  public deleteConfirmation(acceptFunc: () => any, rejectFunc: () => any) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer cet enregistrement?',
      header: 'Suppression',
      icon: 'pi pi-exclamation-triangle',
      accept: acceptFunc,
      reject: rejectFunc
    });
  }
}
