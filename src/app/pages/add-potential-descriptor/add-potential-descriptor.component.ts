import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';

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
     
  constructor(private fb:FormBuilder, private http: HttpServiceService) {  
     
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
      this.http.createAssessmentAttributes(1,this.data).subscribe(
        (res)=>{ console.log(res); 
          this.newItemEvent.emit(res);     
      },
      ((err) =>{
        window.alert("there was an error submitting your records"+ err)
      }),
      ()=>{
        window.alert("Attributes added")
        this.issubmitting = false
      }
      )
    }

    console.log(this.attributeForm.value.attributes); 

  }  
}
