import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor(){
    console.log('App Component constructor called!');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }
}
