import { Component, Input } from '@angular/core';

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
  pointsObj = {Sachin: 105, Amit: 100, Selvi: 100,
               Viji: 200, Vivek: 250, Vijay: 100,
               Rakesh: 64, Indu: -53, Raks: 75,
               Pawan: -90 , Satish: 96, Divs: 460};
 
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
