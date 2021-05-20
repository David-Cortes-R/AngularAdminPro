import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = '';
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // @Input() Labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];


  @Input('data') doughnutChartData: MultiDataSet = [
    [10, 10, 10],
  ];
  public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] }
  ];


  // doughnutChartLabels

}
