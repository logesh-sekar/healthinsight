import { Component, OnInit } from '@angular/core';
import { UserSettingService } from './userSetting.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userSetting',
  templateUrl: './userSetting.component.html',
  styleUrls: ['./userSetting.component.scss']
})
export class UserSettingComponent implements OnInit {

  public myForm: FormGroup;

  public submitted: boolean;

  constructor(private _fb: FormBuilder,
    private programCreatorService: UserSettingService,
    private router: Router) { }

  ngOnInit() {
      this.myForm = this._fb.group({
        firstName: [''],
        lastName: [''],
        securityQuestion: [''],
        securityAnswer: [''],
        phoneNumber: [''],
        EmailId: ['']
        
      });
  }

  submitPc(modelPc: UserSetting) {

       this.submitted = true;
      // call API to save
      // ...
      console.log( 'Model' + JSON.stringify(modelPc));
    this.programCreatorService.UserSettingSubmit(modelPc).subscribe( model => console.log('Succeessfully Created Program Creator'));
    this.router.navigateByUrl('/dashboard');
  }

  savePc(modelPC: UserSetting) {

    this.submitted = true;
   // call API to save
   // ...
   console.log('Model SavePC ' + JSON.stringify(modelPC));
 this.programCreatorService.programCreatorSubmit(modelPC).subscribe( model => console.log('Succeessfully Created Program Creator'));
}

}
