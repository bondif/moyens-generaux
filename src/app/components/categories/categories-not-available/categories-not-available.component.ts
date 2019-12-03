import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';

@Component({
  selector: 'app-categories-not-available',
  templateUrl: './categories-not-available.component.html',
  styleUrls: ['./categories-not-available.component.css']
})
export class CategoriesNotAvailableComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getNotAvailable().then(result=>{
      this.categories=result;
    },err=>{
      console.error(err);
    })

  }
  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0,0);
        doc.autoTable(["name"], this.getCategories());
        doc.save('category'+new Date()+'.pdf');
      })
    })
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.categories);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "categoryTable"+new Date());
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
  getCategories() {
    return this.categories.map(c => c.name);
  }

}
