import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../../services/handle-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchObject } from '../../common/interfaces/match-object';

@Component({
  selector: 'app-polling-page',
  templateUrl: './polling-page.component.html',
  styleUrls: ['./polling-page.component.css']
})
export class PollingPageComponent {

  // Response from server
  matchObj: MatchObject[];

  constructor(private service: HandleDataService, private router: Router){};

  ngOnInit() {
    // "Thu Apr 12 2018"
    var matchDate = new Date().toDateString();
    var endpoint = encodeURI(matchDate);
    this.service.getMatch(endpoint).subscribe((response) => {
      this.matchObj = response.json();
    }, (err) =>{
      alert(`Unable to connect to server - reason: ${err}`);
    });
  }

  timeUp(time){
    var matchTime = +time.split(":")[0];
    var currTime = +new Date().toLocaleString('en-US', { hour: 'numeric', hour12: false });
    if(currTime < (matchTime - 1)){
      return true;
    } else {
      return false;
    }
  }

  launchVoteForm(index){
    if(this.timeUp(this.matchObj[index].time)){
      //this.router.navigate([`/showvote/${this.matchObj[index].date}/${this.matchObj[index].time}/${this.matchObj[index].team1}/${this.matchObj[index].team2}`]);
      this.router.navigate([`/vote/${this.matchObj[index].team1}/${this.matchObj[index].team2}/${this.matchObj[index].date}/${this.matchObj[index].time}`]);
    } else {
      this.router.navigate([`/showvote/${this.matchObj[index].date}/${this.matchObj[index].time}/${this.matchObj[index].team1}/${this.matchObj[index].team2}`]);
    }
  }
}
