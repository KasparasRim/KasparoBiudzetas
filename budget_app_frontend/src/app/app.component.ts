import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalpopupComponent } from './ModalPopUp/modalpopup.component';
import { ModalpopuptipasComponent } from './ModalPopUpTipas/modalpopuptipas.component';
import { Irasas } from './Modal/Irasas';
import { MasterService } from './Service/master.service';
import * as alertify from 'alertifyjs'
import { HttpErrorResponse } from '@angular/common/http';
import { Tipas } from './Modal/Tipas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  })

export class AppComponent implements OnInit {

  data!: number;
  title = 'BudgetApp';
  displayedColumns: string[] = ['id', 'tipas', 'suma', 'data', 'kategorija', 'action'];
  displayedColumns2: string[] = ['id', 'tipas', 'action'];
  dataSource: any;
  dataSource2:any;
  irasasData: any;
  tipasData: any;
  irasai: Irasas[] = [];
  tipai: Tipas[] = [];
    
  constructor(private service: MasterService, private dialog: MatDialog) {
  }
  
  sortList: QueryList<MatSort> | undefined;
  @ViewChildren(MatSort) set matSort(ms: QueryList<MatSort>) {
    this.sortList = ms;
    if (this.dataSource) {
      this.dataSource.sort = this.sortList.toArray()[0];
    }
    if (this.dataSource2) {
      this.dataSource2.sort = this.sortList.toArray()[1];
    }
    
}

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild('allPaginator',{read: MatPaginator}) allPaginator !: MatPaginator;
  

  ngOnInit(): void {
    this.getIrasai();
    this.getTipai();

    this.service.RequiredRefresh.subscribe(r => {
    });
  }

  
  public getIrasai(): void {
    this.service.GetIrasai()
      .subscribe({
        next: (response: Irasas[]) => {

          this.irasai = response;
          this.dataSource = new MatTableDataSource(this.irasai);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sortList;

        },
        error: (error: HttpErrorResponse) => { alert(error.message) }
      }
      );
  }

  public getTipai(): void {
    this.service.GetTipai()
      .subscribe({
        next: (response: Tipas[]) => {

          this.tipai = response;
          this.dataSource2 = new MatTableDataSource(this.tipai);
          this.dataSource2.allPaginator = this.allPaginator;
          this.dataSource2.sort = this.sortList;
          

        },
        error: (error: HttpErrorResponse) => { alert(error.message) }
      }
      );
  }
      
  
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  
  Filterchange2(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filvalue;
  }

  getrow(row: any) {
   
  }

  FunctionEdit(irasasData: any) {
    this.OpenDialog('1000ms','600ms', irasasData);
  }

  FunctionEdit2(tipasData: any) {
    this.OpenDialog2('1000ms','600ms', tipasData);
  }

  FunctionDelete(id: any) {
    alertify.confirm("Delete irasas","Do you want to delete Irasas?",()=>{
      this.service.deleteIrasas(id).subscribe(result => {
        this.getIrasai();
        alertify.success("Deleted successfully!")
      });

    },function(){
   })
  }

  FunctionDelete2(id: any) {
    alertify.confirm("Delete tipas","Do you want to delete Tipas?",()=>{
      this.service.deleteTipas(id).subscribe(result => {
        this.getTipai();
        alertify.success("Deleted successfully!")
      });

    },function(){
   })
  }
      
  OpenDialog(enteranimation: any, exitanimation: any, id: any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        irasasId: id
      }
    })
  }

  OpenDialog2(enteranimation: any, exitanimation: any, id: any) {

    this.dialog.open(ModalpopuptipasComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        tipasId: id
      }
    })
  }

}


