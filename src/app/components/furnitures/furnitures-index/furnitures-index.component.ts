import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FurnitureService} from '../../../services/furniture.service';
import {Furniture} from '../../../entities/Furniture';
import {ConfirmService} from '../../../services/confirm.service';

@Component({
  selector: 'app-furnitures-index',
  templateUrl: './furnitures-index.component.html',
  styleUrls: ['./furnitures-index.component.css'],
})
export class FurnituresIndexComponent implements OnInit {

  furnitures: Furniture[];
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private furnitureService: FurnitureService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.furnitureService.getPage(this.currentPage, this.size).then(furnitures => {
        this.data = furnitures;
        this.furnitures = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }
  showHistory(id: any) {
    this.router.navigateByUrl('/admin/tool/'+id+'/assignments');
  }

  edit(id) {
    this.router.navigateByUrl('/admin/furnitures/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(
      () => {
        this.furnitureService.delete(id).then(
          success => {
            this.furnitures.forEach(e => {
              if (e.id == id) {
                let i = this.furnitures.indexOf(e);
                this.furnitures.splice(i, 1);
              }
            });
          }
        )
      }
      , () => {}
    );

  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

  create() {
    this.router.navigateByUrl('/admin/furnitures/create');
  }
}
