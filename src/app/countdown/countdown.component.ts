import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.css"]
})
export class CountdownComponent implements OnInit {
  currDate: Date = new Date();
  years;
  months;
  hours;
  minutes;
  seconds;

  constructor() {
    this.currDate.setDate(1);
    this.currDate.setHours(2);
    this.currDate.setSeconds(10);
    this.currDate.setMinutes(20);
    window.clearInterval();
    window.clearTimeout();
    window.clearTimeout();
    // setInterval(() => {
    //   const currMins = this.currDate.getMinutes() - 1;
    //   const currSeconds = this.currDate.getSeconds() - 1;
    //   if (this.currDate.getSeconds() === 0) {
    //     this.currDate.setSeconds(60);
    //     this.currDate.setMinutes(currMins);
    //   } else {
    //     this.currDate.setSeconds(currSeconds);
    //   }
    //   // this.currDate = new Date();
    // }, 1000);
  }
  ngOnInit() {}
}
