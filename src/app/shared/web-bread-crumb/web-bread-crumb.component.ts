import { Component, Input, OnInit } from '@angular/core';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'web-bread-crumb',
  templateUrl: './web-bread-crumb.component.html',
  styleUrls: ['./web-bread-crumb.component.css']
})
export class WebBreadCrumbComponent implements OnInit {

  @Input('items')
  public items: BreadCrumbItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: BreadCrumbItem): boolean {
    return this.items.indexOf(item) == this.items.length - 1;
  }
}
