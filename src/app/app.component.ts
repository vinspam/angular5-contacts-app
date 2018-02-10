import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';
import { ITime } from './interfaces/itime.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  time: ITime = { h: 0, m: 0, s: 0 };

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.get().subscribe(res => {
      const date = new Date(res.timestamp * 1000);
      this.time = {
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
      };
    });
  }

}
