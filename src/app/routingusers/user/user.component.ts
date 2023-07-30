import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class RoutingUserComponent implements OnInit {
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
