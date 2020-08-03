import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'angular_nativescript_shared_code_base_app';

  constructor() { }

  ngOnInit() {
  }
}
