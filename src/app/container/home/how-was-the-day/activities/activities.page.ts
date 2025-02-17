import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.feelingsService.fetchAll().subscribe(feelings => {
      this.feelings = feelings.slice();
    });
  }

}
