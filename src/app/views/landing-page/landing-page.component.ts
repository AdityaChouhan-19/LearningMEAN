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

  textBox: string = 'Add your text message here.'

  newPost: string = 'Post message.';

  onAddPost() {
    this.newPost = 'Changed it using the onAddPost function.';

    this.textBox = 'onAddPost Function is called, and the text inside has been replaced.'
  }
}
