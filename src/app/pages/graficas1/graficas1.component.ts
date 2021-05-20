import { Component } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component  {

  
  public label1: String[] = ['Label1', 'Label2', 'Label3'];
  public  data1 = [ 
    [350, 450, 100],
  ];

  public label2: String[] = ['Pan', 'Carne', 'Leche'];
  public  data2 = [ 
    [30, 120, 200],
  ];

  public label3: String[] = ['Papas', 'Doritos', 'Boliquesos'];
  public  data3 = [ 
    [50, 450, 100],
  ];

  public label4: String[] = ['PonyMalta', 'Jugo', 'Yogourt'];
  public  data4 = [ 
    [20, 450, 50],
  ];
  


}
