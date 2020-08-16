import { DataService } from '../data/data.service';
import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-setting';
import { NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: "judith",
    emailOffers:true,
    samegroup:'dark',
    subscriptionType:'Annual',
    notes:'here are some notes'
  };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel){
    console.log('in onblur', field.valid);
  }

  onSubmit(form: NgForm){
    console.log('is onsubmit: ',form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result=>{
        //save the result in data structure
        this.userSettings.name = result.name;
        this.userSettings.emailOffers = result.emailOffers;
        this.userSettings.samegroup = result.samegroup;
        this.userSettings.subscriptionType = result.subscriptionType;
        this.userSettings.notes = result.notes;
        console.log('test result', this.userSettings);
      },
      error=>console.log('error',error)
    );
    
    
  }
}
