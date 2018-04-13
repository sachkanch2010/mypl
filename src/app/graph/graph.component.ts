import { Component, Input } from '@angular/core';
import { VoteObject } from '../../common/interfaces/vote-object';
import { HandleDataService } from '../../services/handle-data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  // to be fetchecd from database @Input does not work
  pointsObj = {Sachin: 0, Amit: 0, Selvi: 0,
               Viji: 0, Vivek: 0, Vijay: 0,
               Rakesh: 0, Indu: 0, Raks: 0,
               Pawan: 0, Satish: 0, Divs: 0};

  votesObj: VoteObject[];
  voters = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'];
  points = {};
  obj = {};

  constructor(private service: HandleDataService){

  }

  ngOnInit(){
    this.service.getVotesAll().subscribe((response) => {
      this.votesObj = response.json();
      var list = Object.keys(this.pointsObj)
      this.voters.forEach((value, index, array) => {
        this.points[value] = this.getSum(value, this.votesObj);
        list.forEach((val, i, arr) => {
          if(val === value){
            this.pointsObj[val] = this.points[value];
          }
        });
      });

      this.barChartData = [
        {
            data: [this.pointsObj.Sachin], label: 'Sachin'
        },
        {
            data: [this.pointsObj.Amit], label: 'Amit'
        },
        {
            data: [this.pointsObj.Selvi], label: 'Selvi'
        },
        {
          data: [this.pointsObj.Viji], label: 'Viji'
        },
        {
          data: [this.pointsObj.Vivek], label: 'Vivek'
        },
        {
          data: [this.pointsObj.Vijay], label: 'Vijap'
        },
        {
          data: [this.pointsObj.Rakesh], label: 'Rakesh'
        },
        {
          data: [this.pointsObj.Indu], label: 'Indu'
        },
        {
          data: [this.pointsObj.Raks], label: 'Raks'
        },
        {
          data: [this.pointsObj.Pawan], label: 'Pawan'
        },
        {
          data: [this.pointsObj.Satish], label: 'Satish'
        },
        {
          data: [this.pointsObj.Divs], label: 'Divs'
        },
      ];
    }, (err) =>{
      alert(`Unable to connect to server - reason: ${err}`);
    });
  }

  getSum(voter, objList:VoteObject[]){
    var totalPoints = 0;
    objList.forEach((value, index, array) => {
      if(voter === value.name){
        totalPoints = totalPoints + value.points;
      }
    });
    return totalPoints;
  }

  
 
  public barChartData:any[] = [
        {
            data: [this.pointsObj.Sachin], label: 'Sachin'
        },
        {
            data: [this.pointsObj.Amit], label: 'Amit'
        },
        {
            data: [this.pointsObj.Selvi], label: 'Selvi'
        },
        {
          data: [this.pointsObj.Viji], label: 'Viji'
        },
        {
          data: [this.pointsObj.Vivek], label: 'Vivek'
        },
        {
          data: [this.pointsObj.Vijay], label: 'Vijap'
        },
        {
          data: [this.pointsObj.Rakesh], label: 'Rakesh'
        },
        {
          data: [this.pointsObj.Indu], label: 'Indu'
        },
        {
          data: [this.pointsObj.Raks], label: 'Raks'
        },
        {
          data: [this.pointsObj.Pawan], label: 'Pawan'
        },
        {
          data: [this.pointsObj.Satish], label: 'Satish'
        },
        {
          data: [this.pointsObj.Divs], label: 'Divs'
        },
  ];
}
