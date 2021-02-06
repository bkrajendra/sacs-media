import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {
  @Input() details;
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
