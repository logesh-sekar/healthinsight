import { Component, OnInit } from '@angular/core';
import { MeasurecreatorService } from './measure-creator.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Measurecreator',
  templateUrl: './measure-creator.component.html',
  styleUrls: ['./measure-creator.component.scss']
})
export class MeasurecreatorComponent implements OnInit {

  public myForm: FormGroup;

  public submitted: boolean;

  constructor(private _fb: FormBuilder, private MeasurecreatorService: MeasurecreatorService, private router: Router) { }

 ngOnInit() {
      this.myForm = this._fb.group({
        programName: [null, [Validators.required]],
        Denominator: [null, [Validators.required]],
        MeasureTitle: [null, [Validators.required]],
        Numerator: [null, [Validators.required]],
        Description: [null, [Validators.required]],
        TargetAge: [null, [Validators.required]],
        NumeratorExclusions: [],
        DenominatorExclusion: [],
        MeasureDomain: [],
        Target: [],
        MeasureCategory: [],
        Type: [],
        ClinicalConditions: []
      });
  }

 

  submitPc(model: Measurecreator, isValid: boolean) {

       this.submitted = true;
      // call API to save
      // ...
      console.log( 'Model' , (model));
    //this.MeasurecreatorService.MeasurecreatorSubmit(model).subscribe( model => //console.log('Succeessfully Created Program Creator'));
    //this.router.navigateByUrl('/dashboard');
  }

  savePc(model: Measurecreator, isValid: boolean) {

    this.submitted = true;
   // call API to save
   // ...
   console.log('Model SavePC ' + JSON.stringify(model));
 this.MeasurecreatorService.MeasurecreatorSubmit(model).subscribe( model => console.log('Succeessfully Created Program Creator'));
}



}


export interface Measurecreator {
    programName: string;
    Denominator: string;
    MeasureTitle: string;
    Numerator: string;
    Description: string;
    TargetAge: number;

   }


 