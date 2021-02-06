import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-emagazines',
  templateUrl: './emagazines.component.html',
  styleUrls: ['./emagazines.component.scss']
})
export class EmagazinesComponent implements OnInit {

  isCollapsed = true;
  isimageLoade = false;
  ClassActive;
  medias: any;
  mediaCount = 0;
  pagecount = 0;
  constructor(
    private media: MediaService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getCount('EMagazine');
    this.getMedias('EMagazine','',1);
  }
  getMedias(type,category,page){
    //this.isimageLoade = false;
    this.media.getMedia(type,category,page).then((data: any) => {
      console.log(data);
      this.medias = data.data;
      this.ClassActive = 0;
    }).catch((err: any)=>{
      //console.log(err);
      
    });
  }
  loadClass(cls){
    this.media.getMedia('EMagazine',cls,1).then((data: any) => {
      console.log(data);
      this.medias = data.data;
      this.ClassActive = cls;
    }).catch((err: any)=>{
      //console.log(err);
      
    });
  }
  getCount(type){
    this.media.getmediaCount(type).then((data: any) => {
      console.log(data);
      this.mediaCount = data.count;
      this.pagecount = Math.ceil(this.mediaCount/10);
    }).catch((err: any)=>{
      console.log(err);
      
    });
  }
  counter(i: number) {
    return new Array(i);
  }
  hideLoader(){
    this.isimageLoade = true;
  }
  openXl(content, url) {
    this.modalService.open(content, { size: 'xl' });
  }
}
