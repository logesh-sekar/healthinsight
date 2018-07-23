import { Component, OnInit } from '@angular/core';
import { ProgramcreatorService } from './programcreator.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-programcreator',
  templateUrl: './programcreator.component.html',
  styleUrls: ['./programcreator.component.scss']
})
export class ProgramcreatorComponent implements OnInit {

  public myForm: FormGroup;

  public submitted:boolean;

  constructor(private _fb: FormBuilder,private programCreatorService:ProgramcreatorService,private router: Router) { }

  ngOnInit() {
      this.myForm = this._fb.group({
        programName: ['', [Validators.required, Validators.minLength(5)]],
        startDate: ['', [Validators.required, Validators.minLength(5)]],
        endDate: ['', [Validators.required, Validators.minLength(5)]],
        programCategorys: this._fb.array([
              this.initProgramCategorys(),
          ])
      });
  }

  initProgramCategorys() {
      return this._fb.group({
        categoryName: ['', Validators.required],
        maxPoints:['', Validators.required],
        maxScore:['', Validators.required]
        
      });
  }

  addCategory() {
      const control = <FormArray>this.myForm.controls['programCategorys'];
      control.push(this.initProgramCategorys());
  }

  removeCategory(i: number) {
      const control = <FormArray>this.myForm.controls['programCategorys'];
      control.removeAt(i);
  }

  submitPc(model: ProgramCreator,isValid :boolean) {

       this.submitted = true;
      // call API to save
      // ...
      console.log("Model "+JSON.stringify(model));
    this.programCreatorService.programCreatorSubmit(model).subscribe(model=> console.log("Succeessfully Created Program Creator"));
    this.router.navigateByUrl("/dashboard");
  }

  savePc(model: ProgramCreator,isValid :boolean) {

    this.submitted = true;
   // call API to save
   // ...
   console.log("Model SavePC "+JSON.stringify(model));
 this.programCreatorService.programCreatorSubmit(model).subscribe(model=> console.log("Succeessfully Created Program Creator"))
}


cancelPc(){
    this.router.navigateByUrl("/dashboard");
}







}


export interface ProgramCreator {
    programName: string;
    startDate: Date;
    endDate: Date;
    programCategorys: ProgramCategorys[];
}

export interface ProgramCategorys {
    categoryName: string;
    maxPoints: number;
    maxScore: number;
}