import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-polling-page',
  templateUrl: './polling-page.component.html',
  styleUrls: ['./polling-page.component.css']
})
export class PollingPageComponent {

  url = 'assets/';
  matchInfo = {team1:'RCB', team2:'CSK', Venue: 'Bangalore' ,Date: '24th April 2018', Time: '7.00 pm'};
  memberList = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs']
  // i:number = -1;

  form = new FormGroup({
      name: new FormControl('',[Validators.required,]), // Default validation
      selectTeam: new FormControl('', [Validators.required,]), // Default validation
  },this.validateMember);

  validateMember(frm: FormGroup) {
    if( ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'].indexOf(frm.get('name').value) === -1) {
      console.log('false');
      frm.get('name').setErrors( {MatchPassword: true} )}
      else {
        console.log('true');
        return null}}

  // Getter functions
  get name(){
    return this.form.get('name');
  }

  public getUrl(team: string): string {
      return this.url.concat(team).concat('.png');
    }

  submitValue(){
    console.log(this.form.get('name').value);
    console.log(this.form.get('selectTeam').value);
  }
}

