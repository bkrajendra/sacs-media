import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MediaService } from 'src/app/services/media.service';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {

  isCollapsed = true;
  medias: any;
  isimageLoade = false;
  mediaCount = 0;
  pagecount = 0;
  user;
  loggedIn:boolean = false;
  constructor(
    private media: MediaService,
    private modalService: NgbModal,
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });  
    this.getCount('Ebook');
    this.getMedias('Ebook','',1);
  }
  getMedias(type,category,page){
    this.media.getMedia(type,category,page).then((data: any) => {
      console.log(data);
      this.medias = data.data;
    }).catch((err: any)=>{
      console.log(err);
      
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
  openXl(details) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {windowClass: 'detail-modal', size: 'lg' });
    modalRef.componentInstance.details = details;
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  // listCourses() {
  //   this.authService.client.classroom.courses.list({
  //     pageSize: 10
  //   }).then(function(response) {
  //     var courses = response.result.courses;
  //     appendPre('Courses:');

  //     if (courses.length > 0) {
  //       for (i = 0; i < courses.length; i++) {
  //         var course = courses[i];
  //         appendPre(course.name)
  //       }
  //     } else {
  //       appendPre('No courses found.');
  //     }
  //   });
  // }
}
