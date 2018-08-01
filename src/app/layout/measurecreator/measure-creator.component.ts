import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasurecreatorService } from './measure-creator.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'appMeasureCreator',
  templateUrl: './measure-creator.component.html',
  styleUrls: ['./measure-creator.component.scss']
})
export class MeasurecreatorComponent implements OnInit {

  public myForm: FormGroup;

  public submitted: boolean;
  measureId: string;
  title: string;
  type: string;
  constructor(private _fb: FormBuilder,
    private measurecreatorService: MeasurecreatorService,
    private router: Router,
    private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.measureId = params['measureId'];
            this.type = params['type'];
            this.title = (this.type === '1' ) ? 'Measure Editor' : 'Measure Creator';
        });
    }

 ngOnInit() {
   if (this.measureId) {
    this.measurecreatorService.getMeasuerInfo(this.measureId).subscribe((data: any) => {
      this.setMeasureInfo(data);
    });
   }
      this.myForm = this._fb.group({
        programName: ['', [Validators.required]],
        Denominator: ['', [Validators.required]],
        MeasureTitle: ['', [Validators.required]],
        Numerator: ['', [Validators.required]],
        Description: ['', [Validators.required]],
        TargetAge: ['', [Validators.required]],
        NumeratorExclusions: [],
        DenominatorExclusion: [],
        MeasureDomain: [],
        Target: [],
        MeasureCategory: [],
        Type: [],
        ClinicalConditions: [],
        id: []
      });
  }

 setMeasureInfo(measureInfo) {
   this.myForm.controls['programName'].setValue(measureInfo.programName);
   this.myForm.controls['MeasureTitle'].setValue(measureInfo.name);
   this.myForm.controls['Description'].setValue(measureInfo.description);
   this.myForm.controls['TargetAge'].setValue(measureInfo.targetAge);
   this.myForm.controls['MeasureDomain'].setValue(measureInfo.measureDomain);
   this.myForm.controls['MeasureCategory'].setValue(measureInfo.measureCategory);
   this.myForm.controls['Type'].setValue(measureInfo.type);
   this.myForm.controls['ClinicalConditions'].setValue(measureInfo.clinocalCondition);
   this.myForm.controls['Denominator'].setValue(measureInfo.denominator);
   this.myForm.controls['DenominatorExclusion'].setValue(measureInfo.denomExclusions);
   this.myForm.controls['Numerator'].setValue(measureInfo.numerator);
   this.myForm.controls['NumeratorExclusions'].setValue(measureInfo.numeratorExclusions);
   this.myForm.controls['Target'].setValue(measureInfo.target);
    if (this.type === '1') {
      this.myForm.controls['id'].setValue(measureInfo.id);
    }
 }
 validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

  submitPc(model: Measurecreator, isValid: boolean) {

       this.submitted = true;
      // call API to save
      // ...
      console.log( 'Model' , (model));
    this.measurecreatorService.MeasurecreatorSubmit(model).subscribe( model1 => console.log('Succeessfully Created Program Creator'));
    this.router.navigateByUrl('/measurelibrary');
  }

  savePc(model: Measurecreator, isValid: boolean) {

    this.submitted = true;
   // call API to save
   // ...
   console.log('Model SavePC ' + JSON.stringify(model));
 this.measurecreatorService.MeasurecreatorSubmit(model).subscribe( model2 => console.log('Succeessfully Created Program Creator'));
}
onSubmit() {
  if (this.myForm.valid) {
    this.submitPc(this.myForm.value, this.myForm.valid);
  } else {
    this.validateAllFormFields(this.myForm);
  }
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


 