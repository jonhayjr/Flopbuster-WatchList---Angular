import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Input() index;
  @Input() first;
  @Input() last;
  @Output() swapMovie = new EventEmitter();

  onClick(index, newIndex) {
    this.swapMovie.emit({index, newIndex});
  }

  ngOnInit() {
  }


}