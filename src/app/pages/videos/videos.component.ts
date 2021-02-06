import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {


  isCollapsed = true;
  medias: any =[];
  isimageLoade = false;
  mediaCount = 0;
  pagecount = 0;
  constructor(
    private media: MediaService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getCount('Video');
    this.getMedias('Video','',1);
  }
  getMedias(type,category,page){
    this.media.getMedia(type,category,page).then((data: any) => {
      console.log(data);
      this.medias = data.data;
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
