import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HandleDataService {

  matchUrl: string = 'http://localhost:3000/matches';
  voteUrl: string = 'http://localhost:3000/votes';
  constructor(private http: Http) {};

  getMatch(endpoint){
    var uri = `${this.matchUrl}/${endpoint}`;
    return this.http.get(uri);
  };

  getSingleMatch(date, time){
    var uri = `${this.matchUrl}/${date}/${time}`;
    return this.http.get(uri);
  };

  getMatches(){
    return this.http.get(this.matchUrl);
  };

  getVotes(date, time){
    var uri = `${this.voteUrl}/${date}/${time}`;
    return this.http.get(uri);
  };

  getVotesAll(){
    return this.http.get(this.voteUrl);
  };

  addMatch(matchObject){
    return this.http.post(this.matchUrl, matchObject);
  };

  addVote(voteObject){
    return this.http.put(this.voteUrl, voteObject);
  };

  updateMatch(matchObject){
    return this.http.put(this.matchUrl, matchObject);
  };
}
