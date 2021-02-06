import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isCollapsed = true;
  isOpen=true;

  constructor(
    private media: MediaService
  ) { }

  ngOnInit(): void {

  }

}
