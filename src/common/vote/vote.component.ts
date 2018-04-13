import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HandleDataService } from '../../services/handle-data.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  voteObject= {
    name: "",
    vote: "",
    voted: false,
    matchDate: "",
    matchTime: "",
    points: 0
  };

  //URL params
  team1;
  team2;

  imgUrl1;
  imgUrl2;
  selectedVote;
  constructor(private service: HandleDataService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe( (params) => {
      this.team1 = params.team1;
      this.team2 = params.team2;
      this.voteObject.matchDate = params.date;
      this.voteObject.matchTime = params.time;
    });
  }

  ngOnInit() { 
    this.imgUrl1 = `assets/${this.team1}.png`;
    this.imgUrl2 = `assets/${this.team2}.png`;
  }

  voters = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'];

  form = new FormGroup({
    option: new FormControl('',[Validators.required]), // Default validation
    name: new FormControl('',[Validators.required]), // Default validation
  });

  get option(){
    return this.form.get('option');
  };

  submitValue(){
    this.voteObject.name = this.form.value.name;
    this.voteObject.vote = this.form.value.option;
    this.voteObject.voted = true;
    this.voteObject.points = 0;
    this.service.addVote(this.voteObject).subscribe((response) => {
      if (response.status === 200){
        this.router.navigate(['/polling']);
      } else {
        alert(`Unable to add you vote`);
      }
    }, (err) =>{
      alert(`Unable to add you vote - reason: ${err}`);
    });
  }

  closeClick(){
    this.router.navigate(['/polling']);
  }
}
