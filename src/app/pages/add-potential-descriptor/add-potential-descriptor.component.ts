import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import moment, { duration } from 'moment';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-potential-descriptor',
  templateUrl: './add-potential-descriptor.component.html',
  styleUrl: './add-potential-descriptor.component.scss'
})
export class AddPotentialDescriptorComponent {
  issubmitting:boolean = false
  name = 'Angular';  
  data:any;  
  attributeForm: FormGroup;  
  @Output() newItemEvent = new EventEmitter<boolean>();
     
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AddPotentialDescriptorComponent>, private http: HttpServiceService,private sb: MatSnackBar) {  
     
    this.attributeForm = this.fb.group({ 
      attributes: this.fb.array([]) ,  
    });  
  }  
    
  attributes() : FormArray {  
    return this.attributeForm.get("attributes") as FormArray  
  }  
     
  newAtrr(): FormGroup {  
    return this.fb.group({  
      potentialAttributeName: '',  
      potentialAttributeDescription: '',  
      createdAt:moment().local()
    })  
  }  
     
  addAttribute() {  
    this.attributes().push(this.newAtrr());  
  }  
     
  removeAttribute(i:number) {  
    this.attributes().removeAt(i);  
  }  
     
  onSubmit() {  
    this.issubmitting = true
    if (this.attributeForm.value.attributes =='' || this.attributeForm.value.attributes == null) {
      window.alert("please fill out all fields")
    }else{
      this.data = this.attributeForm.value.attributes
    
      console.log(this.data)
      this.http.createAssessmentAttributes(1,this.data).subscribe(
        (res)=>{ console.log(res); 
          this.newItemEvent.emit(res);     
      },
      ((err) =>{
        console.error("there was an error submitting your records"+ err)
      }),
      ()=>{
        this.dialogRef.close()
        this.sb.open("Attribute added succesfully",  'Close', { duration: 2000 })
        this.issubmitting = false
      }
      )
    }

    console.log(this.attributeForm.value.attributes); 

  }  
}
