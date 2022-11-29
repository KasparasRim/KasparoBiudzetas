import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../Service/master.service';
import * as alertify from 'alertifyjs';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { __values } from 'tslib';


@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

  constructor(private service: MasterService, 
    public dialogref: MatDialogRef<ModalpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  options = [
    {option: 1, name: 'Pajamos'},
    {option: 2, name: 'Islaidos'}
  ]
  
  respdata: any;
  editdata: any;

  ngOnInit(): void {
    
    if(this.data.irasasId!=null && this.data.irasasId!=''){
    this.LoadEditData(this.data.irasasId);
    }
  }
  
  Reactiveform = new FormGroup({
    id: new FormControl(""),
    suma: new FormControl("",Validators.required),
    data: new FormControl(""),
    kategorija: new FormControl(""),
    tipas: new FormControl("")
    
  });

  onSubmit() {        
    console.warn(this.Reactiveform.value);
   }
   

  LoadEditData(id: any) {
    this.service.GetIrasasById(id).subscribe(item => {
      this.editdata = item;
      this.Reactiveform.setValue({id:this.editdata.id, tipas:"Pajamos", suma:this.editdata.suma,
        data:this.editdata.data, kategorija:this.editdata.kategorija});
        console.log(this.editdata);
        
    });
  }

  SaveIrasas() {
    if (this.Reactiveform.valid) {
     
        this.service.Save(this.Reactiveform.value).subscribe(result => {
        this.respdata = result;
        alertify.success("Saved successfully")
        this.dialogref.close(); 
      });
   
    } else {
      alertify.error("Please Enter valid data")
    }
      
    
  } 
}
  
  
