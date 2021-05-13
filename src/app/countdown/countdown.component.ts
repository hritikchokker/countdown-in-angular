import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  currDate: Date = new Date();
  years;
  months;
  hours = 1;
  minutes = 10;
  seconds = 10;
  days = 10;
  secondsSubscription = new Subscription();
  hoursSubscription = new Subscription();
  minutesSubscription = new Subscription();
  constructor() {}
  ngOnInit(): void {
    this.manageCountDown();
  }
  manageCountDown(start = 59) {
    this.secondsSubscription.add(
      timer(100, 1000)
        .pipe(
          map(i => start - i),
          take(start + 1)
        )
        .subscribe(data => {
          this.seconds = data;
          if (this.days === 0 && this.hours === 0 && this.minutes === 0) {
            this.secondsSubscription.unsubscribe();
            return;
          }
          if (this.seconds === 0) {
            if (this.days >= 1 && this.hours === 0 && this.minutes == 0) {
              this.hours = 23;
              this.minutes = 59;
              this.days--;
              this.manageCountDown();
              return;
            }
            if (this.minutes === 0 && this.hours > 0) {
              this.hours--;
              this.minutes = 59;
              this.manageCountDown();
              return;
            }
            if (this.minutes > 0) {
              this.minutes--;
              this.manageCountDown();
              return;
            }
            // if (this.hours === 0 && this.minutes === 0 && this.days > 0) {
            //   this.days--;
            //   this.hours = 23;
            //   this.minutes = 59;
            //   this.manageCountDown();
            //   return;
            // }
            // this.manageCountDown();
          }
        })
    );
  }
}
