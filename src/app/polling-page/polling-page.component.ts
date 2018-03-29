import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-polling-page',
  templateUrl: './polling-page.component.html',
  styleUrls: ['./polling-page.component.css']
})
export class PollingPageComponent {

  minimumNumberOfPlayers: number = 2;
  minimumNumberOfCardPacks: number = 1;
  @Input() numberOfPlayers: number = 3;
  @Input() numberOfDecks: number = 1;
  @Input() timeoutValue: number;

  // Array to hold numbers. This will be used to render lists in templates
  arrayOfNumberOfPlayers: number[] = [];
  arrayOfNumberOfDecks: number[] = [];

  team1 = 'RCB';
  team2 = 'CSK';
  url = '';
  matchInfo = {teams:'RCB vs CSK', Venue: 'Bangalore' ,Date: '24th April 2018', Time: '7.00 pm'};

  form = new FormGroup({
      name: new FormControl('', Validators.required), // Default validation
      selectTeam: new FormControl('', Validators.required), // Default validation
  });

  // Getter functions
  get name(){
    return this.form.get('name');
  }

  submitValue(){
    console.log(this.form.get('name'));
    console.log(this.form.get('selectTeam'));
  }
}

