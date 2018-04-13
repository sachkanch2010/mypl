import { HandleDataService } from './../../services/handle-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  // Response from server
  matchObj: object = {
    team1: "",
    team2: "",
    date: "",
    time: ""
  }

  constructor() {}

  ngOnInit() {

  }

  url = 'assets/';
  
  form = new FormGroup({
      name: new FormControl('',[Validators.required]), // Default validation
      selectTeam: new FormControl('', [Validators.required]), // Default validation
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

  public getUrl(team: string): string {
    return this.url.concat(team).concat('.png');
  }

}
