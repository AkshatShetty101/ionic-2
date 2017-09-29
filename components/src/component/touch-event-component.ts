import {Component} from "@angular/core";
@Component({
  selector:'app-touch-event',
  template:`
    <div class="gestures"
         (click)="onElementClicked()">Click
    </div>
    <div class="gestures"
         (tap)="onElementTapped()">Tap
    </div>
    <div class="gestures"
         (press)="onElementPressed()"
         (click)="onElementClicked()">Long press
    </div>
  `
})
export class TouchEventComponent{
  onElementClicked(){
    console.log('i was touched or clicked!');
  }
  onElementTapped(){
    console.log('i was tapped!');
  }
  onElementPressed(){
    console.log('i was pressed!');
  }

}
