import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title: string = 'Landing page section';

  userInput: string = 'Enter your message here.'

  newPost: string = 'Post message.';

  onAddPost(textInput: HTMLTextAreaElement) {
    this.newPost = textInput.value;
  }
}
