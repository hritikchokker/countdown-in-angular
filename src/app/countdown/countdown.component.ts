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
  hours = 24;
  minutes = 59;
  seconds = 60;
  days = 2;
  secondsSubscription = new Subscription();
  hoursSubscription = new Subscription();
  minutesSubscription = new Subscription();
  constructor() {
    // // or
    // Rx.Observable
    //   .range(0, start + 1)
    //   .map(i => start - i)
    //   .subscribe(i => console.log(i));
    //   }
  }

  ngOnInit(): void {
    // this.manageCountDown();
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
          }
          if (this.minutes === 0) {
            this.minutes = 59;
          } else {
            this.minutes--;
          }
          if (this.hours === 0) {
            this.hours = 23;
          } else {
            this.hours--;
          }
          if (this.days === 0) {
            this.manageCountDown();
            return;
          }
          if (this.seconds === 0) {
            this.manageCountDown();
          }
        })
    );
  }
  // manageMinutes(start: number) {
  //   this.minutesSubscription.add(
  //     timer(100, 60000)
  //       .pipe(
  //         map(i => start - i),
  //         take(start + 1)
  //       )
  //       .subscribe(i => {
  //         if (i == 0) {
  //           if (this.hours === 0) {
  //             if (this.days > 0) {
  //               this.hours = 24;
  //               this.manageMinutes(60);
  //             } else {
  //               this.minutesSubscription.unsubscribe();
  //             }
  //           }
  //           if (this.hours > 0) {
  //             this.hours--;
  //             this.manageMinutes(60);
  //           }
  //         }
  //         this.minutes = i;
  //       })
  //   );
  // }
  // manageSeconds(start = 60) {
  //   this.secondsSubscription.add(
  //     timer(100, 1000)
  //       .pipe(
  //         map(i => start - i),
  //         take(start + 1)
  //       )
  //       .subscribe(i => {
  //         if (this.minutes === 0 && this.hours === 0) {
  //           if (this.days > 0) {
  //             this.days--;
  //             this.hours = 24;
  //             this.minutes = 60;
  //             return;
  //           }
  //           this.secondsSubscription.unsubscribe();
  //         }
  //         if (i == 0) {
  //           // this.minutes = 60;
  //           this.manageSeconds();
  //         }
  //         this.seconds = i;
  //       })
  //   );
  // }

  // manageHours(start = 12) {
  //   // this.hoursSubscription.add(
  //   //   timer(100, 6000)
  //   //     .pipe(
  //   //       map(i => start - i),
  //   //       take(start + 1)
  //   //     )
  //   //     .subscribe(i => {
  //   //       this.hours = i;
  //   //     })
  //   // );
  // }
}
