import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
const circleR= 80;
const circleDasharray = 2 * Math.PI * circleR;
@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject("00:00");
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  
  timer:number;
  interval;

  circleR = circleR;
  circleDasharray = circleDasharray;
  ishidden = true;
  

  constructor(private route: Router) { }

  ToHome()
  {
    this.route.navigate(['/home-directory']);
  }



  startDuration = 1;
  ngOnInit() {
  }

  startTimer(duration: number)
  {
    this.timer = duration * 60;
    setInterval( () => 
    {
      this.updateTimeValue();
    }, 1000);
  }

  percentageOffset(percent)
  {
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }
  updateTimeValue()
  {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration * 60;
    const percentage = ((totalTime-this.timer) / totalTime) * 100;
    this.percent.next(percentage);

    --this.timer;
    
    if(this.timer < 0)
    {
      this.ishidden = false;
      this.startTimer(10);
    }
  }

}
