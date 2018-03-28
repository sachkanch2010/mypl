import { Component } from '@angular/core';

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
 
  public barChartData:any[] = [
        {
            data: ['100'], label: 'Sachin'
        },
        {
            data: ['200'], label: 'Amit'
        },
        {
            data: ['100'], label: 'Selvi'
        },
        {
          data: ['200'], label: 'Viji'
        },
        {
          data: ['100'], label: 'Vivek'
        },
        {
          data: ['100'], label: 'Vijap'
        },
        {
          data: ['100'], label: 'Rakesh'
        },
        {
          data: ['-100'], label: 'Indu'
        },
        {
          data: ['100'], label: 'Raks'
        },
        {
          data: ['100'], label: 'Pawan'
        },
        {
          data: ['200'], label: 'Satish'
        },
        {
          data: ['100'], label: 'Divs'
        },
  ];
}
