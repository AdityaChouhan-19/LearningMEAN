import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  [x: string]: any;
  constructor() {}

  ngOnInit(): void {}

  //variables
  title: string = 'Landing page section';

  inputColor: string = 'Blue'

  userInput: string = 'Placeholder';
  newPost: string = 'Post message.';

  onAddPost() {
    this.newPost = this.userInput;
  }

  onChangeColor(textInput: HTMLInputElement){
    this.textAreaBgColor = textInput.value;
  }
}
