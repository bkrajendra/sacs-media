import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SACS-Media';
  
  ngOnInit(): void {
    console.log('###################################');
    console.log('Welcome to this tiny space.');
    console.log('I have designed this website for school media contents.');
    console.log('I am using latest tech to craft it!');
    console.log('---- Anshul Khope (6th D)');
    console.log('###################################');
  }
}
