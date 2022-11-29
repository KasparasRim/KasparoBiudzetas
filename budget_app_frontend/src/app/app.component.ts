import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalpopupComponent } from './ModalPopUp/modalpopup.component';
import { Irasas } from './Modal/Irasas';
import { MasterService } from './Service/master.service';
import * as alertify from 'alertifyjs'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })

export class AppComponent implements OnInit {

  balansas!: number;
  data!: number;
  title = 'BudgetApp';
  displayedColumns: string[] = ['id', 'tipas', 'suma', 'data', 'kategorija', 'action'];
  dataSource: any;
  irasasData: any;
  irasai: Irasas[] = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getIrasai();
    this.service.RequiredRefresh.subscribe(r => {
      this.getIrasai();
    });
  }

  public getIrasai(): void {
    this.service.GetIrasai()
      .subscribe({
        next: (response: Irasas[]) => {

          this.irasai = response;
          this.dataSource = new MatTableDataSource(this.irasai);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         
        },
        error: (error: HttpErrorResponse) => { alert(error.message) }
        }
      );
      }
      
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getrow(row: any) {
   
  }

  FunctionEdit(irasasData: any) {
    this.OpenDialog('1000ms','600ms', irasasData);
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

}


