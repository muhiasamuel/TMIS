import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-potential-descriptor',
  templateUrl: './add-potential-descriptor.component.html',
  styleUrl: './add-potential-descriptor.component.scss'
})
export class AddPotentialDescriptorComponent {

  name = 'Angular';  
    
  attributeForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
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
    console.log(this.attributeForm.value.attributes);  
  }  
}
