import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Color } from '../shared/color'
import { colors } from '../shared/colors'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  color: Color;
  title = 'lab5';
  Colors = colors;
  constructor(){
    this.color=colors[0];
  };

  changeColour(t:number){
      let colour=colors[t];
      let a:any = colour.id
      let b:any = document.getElementById(a);
      colour.hex=b.value;
    }
  
}
  

