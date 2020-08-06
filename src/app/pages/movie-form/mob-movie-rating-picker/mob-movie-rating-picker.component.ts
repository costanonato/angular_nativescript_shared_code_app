import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventData } from '@nativescript/core/data/observable';
import { ListPicker } from "@nativescript/core/ui/list-picker";

@Component({
  selector: 'mob-movie-rating-picker',
  templateUrl: './mob-movie-rating-picker.component.html',
  styleUrls: ['./mob-movie-rating-picker.component.css']
})
export class MobMovieRatingPickerComponent implements OnInit {

  @Input('form-control') formControl: FormControl;
  @Input('movie-rating-options') movieRatingOptions: number[];

  constructor() { }

  ngOnInit() {
  }

  getSelectedIndex(){
    const value = this.formControl.value;
    return this.movieRatingOptions.indexOf(value);
  }

  changeMovieRating(args: EventData){
    const picker = <ListPicker>args.object;
    const value = this.movieRatingOptions[picker.selectedIndex];
    
    if(value) { this.formControl.setValue(value); }
  }

}