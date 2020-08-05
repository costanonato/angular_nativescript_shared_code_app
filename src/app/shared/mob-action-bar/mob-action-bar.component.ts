import { Component, Input, OnInit } from '@angular/core';
import * as app from "@nativescript/core/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'mob-action-bar',
  templateUrl: './mob-action-bar.component.html',
  styleUrls: ['./mob-action-bar.component.css']
})
export class MobActionBarComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';


  constructor() { }

  ngOnInit() {
  }

  showDrawer(){
    const sideDrawer = <RadSideDrawer><any>app.getRootView();
    sideDrawer.showDrawer();
  }
}
