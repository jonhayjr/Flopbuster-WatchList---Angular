import { Component, OnInit } from '@angular/core';
import { WATCH_LIST } from './DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = WATCH_LIST
  numOfItemsToShow = 4;
  buttonHide=false;


  constructor(private titleService: Title) {
    titleService.setTitle(this.watchList.length + ' items')
  }

  ngOnInit() {
  }


  swapMovie(event) {
   //Get item value
    const {index, newIndex} = event;

    //Get element value
    const item = this.watchList[index];

    //Remove item from array
    this.watchList.splice(index, 1);

    //Add to new position in array
    this.watchList.splice(newIndex, 0, item);
  }

  showAll() {
    //Set numOfItemsToShow to array length
    this.numOfItemsToShow = this.watchList.length;

    //Hide button
    this.buttonHide = true;
  }


}
