import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../../services/handle-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-votes',
  templateUrl: './show-votes.component.html',
  styleUrls: ['./show-votes.component.css']
})
export class ShowVotesComponent implements OnInit {

  // // Response from server
  votesObj: object = [];

  team1;
  team2;
  matchDate;
  matchTime;

  constructor(private service: HandleDataService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe( (params) => {
      this.team1 = params.team1;
      this.team2 = params.team2;
      this.matchDate = params.date;
      this.matchTime = params.time;
    });
  }

  ngOnInit() {
    var date = encodeURI(this.matchDate); 
    this.service.getVotes(date, this.matchTime).subscribe((response) => {
      this.votesObj = response.json();
    }, (err) =>{
      alert(`Unable to connect to server - reason: ${err}`);
    });
  }
}
