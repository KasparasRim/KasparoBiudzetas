import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../Service/master.service';
import * as alertify from 'alertifyjs';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { __values } from 'tslib';

@Component({
  selector: 'app-modalpopuptipas',
  templateUrl: './modalpopuptipas.component.html',
  styleUrls: ['./modalpopuptipas.component.css']
})

export class ModalpopuptipasComponent implements OnInit {
  tipai: any[] = [];
  tipasStr!: String;

  constructor(private service: MasterService, 
    public dialogref: MatDialogRef<ModalpopuptipasComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  respdata: any;
  editdata: any;

  ngOnInit(): void {
    
    if (this.data.tipasId != null && this.data.tipasId != '') {
      this.LoadEditData(this.data.tipasId);
    
    }
    this.service.GetTipai().subscribe((tipai) => {
      this.tipai = tipai;
      });
  }
  
  
  Reactiveform2 = new FormGroup({
    id: new FormControl(""),
    tipasStr: new FormControl("", Validators.required)
    
  });

  onSubmit() {        
    console.warn(this.Reactiveform2.value);
    console.log(FormControl)
   }
   

  LoadEditData(id: any) {
    this.service.GetTipasById(id).subscribe(item => {
      this.editdata = item;
      this.Reactiveform2.setValue({id:this.editdata.id, tipasStr:this.editdata.tipasStr});
        console.log(this.editdata);
        
    });
  }

  SaveTipas() {
    if (this.Reactiveform2.valid) {

        this.service.Save2(this.Reactiveform2.value).subscribe(result => {
        this.respdata = result;
                
        alertify.success("Saved successfully")
        this.dialogref.close(); 
      });
   
    } else {
      alertify.error("Please Enter valid data")
    }
    
  } 
}
  
  
