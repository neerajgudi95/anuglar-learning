import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.css'],
})
export class ObsHomeComponent implements OnInit, OnDestroy {
  count = 0;
  intSubs: Subscription;

  ngOnInit(): void {
    this.intSubs = interval(1000).subscribe((count) => {
      this.count = count;
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.intSubs.unsubscribe();
  }
}
