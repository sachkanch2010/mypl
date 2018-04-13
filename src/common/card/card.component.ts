import { Component, OnInit, Input } from '@angular/core';
import { HandleDataService } from '../../services/handle-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoteObject } from '../interfaces/vote-object';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: HandleDataService, private router: Router) { }

  @Input() completed = false;
  @Input() team1: string;
  @Input() team2: string;
  @Input() date: string;
  @Input() time: string;
  @Input() showUpdateFormOption: boolean = true;

  teams = [];
  matchWinner = "";
  voters = ['Sachin'];

  ngOnInit() {
    if(this.showUpdateFormOption){
      var matchDate = new Date(this.date).toDateString();
      var date = encodeURI(matchDate);
      this.service.getSingleMatch(date, this.time).subscribe((response) => {
        if(response.json()[0]){
          this.matchWinner = response.json()[0].winner;
          this.completed = response.json()[0].completed;
        }
                
        this.teams.push(this.team1);
        this.teams.push(this.team2);
      }, (err) =>{
        alert(`Unable to connect to server - reason: ${err}`);
      });
    };
  }

  form = new FormGroup({
    winner: new FormControl('',[Validators.required]), // Default validation
  });

  get winner(){
    return this.form.get('winner');
  };

  showVoters(){
    this.router.navigate([`/showvote/${this.date}/${this.time}/${this.team1}/${this.team2}`]);
  }

  buttonClick(){
    if(this.winner.status === "INVALID"){
      alert(`Please enter the winner of the match!`);
    } else {
      var matchObject = {
        completed: true,
        winner: this.winner.value,
        date: this.date,
        time: this.time
      }

      this.service.updateMatch(matchObject).subscribe((response) => {
        matchObject = response.json();
        this.matchWinner = matchObject.winner;
        this.completed = matchObject.completed;
      }, (err) =>{
        alert(`Unable to connect to server - reason: ${err}`);
      });

      var date = encodeURI(this.date); 
      this.service.getVotes(date, this.time).subscribe((response) => {
        var votersObj: VoteObject[] = response.json();
        var totalLoser = 0;
        var totalWinners = 0;
        var totalPoints = 0;
        votersObj.forEach((value, index, array) => {
          if(value.vote === "-"){
            totalLoser = totalLoser + 1;
            totalPoints = totalPoints + 20;
          } else if(value.vote !== this.winner.value){
            totalLoser = totalLoser + 1;
            totalPoints = totalPoints + 10;
          } else if (value.vote === this.winner.value){
            totalWinners = totalWinners + 1;
          };
        });

        votersObj.forEach((value, index, array) => {
          if(value){
            if(value.vote === "-"){
              votersObj[index].points = -20;
              this.service.addVote(votersObj[index]).subscribe((response) => {
                if (response.status === 200){
                  // Do nothing;
                } else {
                  alert(`Unable to update the vote`);
                }
              }, (err) =>{
                alert(`Unable to update the vote - reason: ${err}`);
              });
            } else if(value.vote !== this.winner.value && value.voted){
              votersObj[index].points = -10;
              this.service.addVote(votersObj[index]).subscribe((response) => {
                if (response.status === 200){
                  // Do nothing;
                } else {
                  alert(`Unable to update the vote`);
                }
              }, (err) =>{
                alert(`Unable to update the vote - reason: ${err}`);
              });
            } else if(value.vote === this.winner.value && value.voted){
              votersObj[index].points = totalPoints/totalWinners;
              this.service.addVote(votersObj[index]).subscribe((response) => {
                if (response.status === 200){
                  // Do nothing;
                } else {
                  alert(`Unable to update the vote`);
                }
              }, (err) =>{
                alert(`Unable to update the vote - reason: ${err}`);
              });
            };
          };
        });
      }, (err) =>{
        alert(`Unable to connect to server - reason: ${err}`);
      });
    }
  }
}
