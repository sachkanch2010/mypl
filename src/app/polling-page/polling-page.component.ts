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
  matchInfo = {team1:'RCB', team2:'CSK', Venue: 'Bangalore' ,Date: '24th April 2018', Time: '16:00'};

  form = new FormGroup({
      name: new FormControl('',[Validators.required,]), // Default validation
      selectTeam: new FormControl('', [Validators.required,]), // Default validation
  },this.validateMember);

  validateMember(frm: FormGroup) {
    if( ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'].indexOf(frm.get('name').value) === -1) {
      console.log('false');
      frm.get('name').setErrors( {validateMember: true} )}
      else {
        console.log('true');
        return null}}

  // Getter functions
  get name(){
    return this.form.get('name');
  }


  submitValue(){
    console.log(this.form.get('name').value);
    console.log(this.form.get('selectTeam').value);
  }

// ############################################################################################################
  matchInfo2 = {team1:'DD', team2:'RR', Venue: 'Delhi' ,Date: '24th April 2018', Time: '20:00'};
  // matchInfo2 = null

  form2 = new FormGroup({
      name2: new FormControl('',[Validators.required,]), // Default validation
      selectTeam2: new FormControl('', [Validators.required,]), // Default validation
  },this.validateMember2);

  validateMember2(frm2: FormGroup) {
    if( ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'].indexOf(frm2.get('name2').value) === -1) {
      console.log('false');
      frm2.get('name2').setErrors( {validateMember2: true} )}
      else {
        console.log('true');
        return null}}

  // Getter functions
  get name2(){
    return this.form2.get('name2');
  }

  submitValue2(){
    console.log(this.form2.get('name2').value);
    console.log(this.form2.get('selectTeam2').value);
  }

  public getUrl(team: string): string {
    return this.url.concat(team).concat('.png');
  }

}

