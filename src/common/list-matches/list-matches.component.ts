import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../../services/handle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {

  // Response from server
  matchObj: object = [{
    team1: "",
    team2: "",
    date: "",
    time: "",
    completed: false,
  }];

  constructor(private service: HandleDataService){};

  ngOnInit() {
    this.service.getMatches().subscribe((response) => {
      this.matchObj = response.json();
    }, (err) =>{
      alert(`Unable to connect to server - reason: ${err}`);
    });
  }
}
