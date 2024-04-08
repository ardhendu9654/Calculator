import { Component } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  title = 'Calculator';
  toshow = '0';
  currvalue = '';
  writetoinput(value: string){
    if(this.currvalue != 'papai'){
      this.currvalue = this.currvalue + value
    }
    this.toshow = this.currvalue
  }

  equals(){
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  cls() {
    this.currvalue = '';
    this.toshow = this.currvalue
  }

  back(){
    this.currvalue = this.currvalue.slice(0,-1)
    this.toshow = this.currvalue
    if (this.toshow == ''){
      this.toshow = '0'
    }
  }

  calvalue(solve:any){
    if (solve.charAt(0) == '0'){
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve)
  }
}
