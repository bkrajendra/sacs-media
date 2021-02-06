import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
})
export class LivestreamComponent implements OnInit {

  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
