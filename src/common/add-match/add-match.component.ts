import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HandleDataService } from '../../services/handle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  constructor(private service: HandleDataService, private router: Router) { }

  ngOnInit() {
  }

  teams = ['RCB', 'KKR', 'DD', 'CSK', 'KXIP', 'RR', 'SRH', 'MI'];
  times = ['16:00', '20:00'];

  form = new FormGroup({
    team1: new FormControl('',[Validators.required]), // Default validation
    team2: new FormControl('', [Validators.required]), // Default validation
    date: new FormControl('', [Validators.required]), // Default validation
    time: new FormControl('', [Validators.required]), // Default validation
  });

  get team1(){
    return this.form.get('team1');
  };

  get team2(){
    return this.form.get('team2');
  };

  submitValue(){
    var newDate = new Date(this.form.value.date).toString();
    var date = newDate.split(" ", 4).join(" ");
  
    var matchObject = this.form.value;
    matchObject.date = date;
    this.service.addMatch(matchObject).subscribe((response) => {
      if (response.status === 200){
        this.router.navigate(['/polling']);
      } else {
        alert(`Unable to add match`);
      }
    }, (err) =>{
      alert(`Unable to add match - reason: ${err}`);
    });
  };

  takeToPolling(){
    this.router.navigate(['/polling']);
  }
}
