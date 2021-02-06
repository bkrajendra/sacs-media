import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http: HttpClient,
  ) { }
 

  getMedia(type,category,page) {
    const promise = new Promise((resolve, reject) => {
      let apiURL;
      if (category===''){
        apiURL = 'https://app.arnoldcentralschool.org/api/medias?type=' + type + '&page='+page;
      }else
      {
        if (type==='EMagazine') {
          apiURL = 'https://app.arnoldcentralschool.org/api/medias?type=' + type + '&grade='+category + '&page='+page;
        } else {
          apiURL = 'https://app.arnoldcentralschool.org/api/medias?type=' + type + '&book_category='+category + '&page='+page;
        }
        
      }
      
      this.http
        .get(apiURL)
        .toPromise()
        .then((res: any) => {
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  saveAdmission(data, token) {
    const promise = new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append(
        'Content-Type', 'application/json'
      );

      const apiURL = 'https://app.arnoldcentralschool.org/api/v1/saveadmission?token=' + token;
      this.http
        .post(apiURL, JSON.stringify(data), {headers})
        .toPromise()
        .then((res: any) => {
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
  getmediaCount(type) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://app.arnoldcentralschool.org/api/medias?type=' + type + '&count=yes';
      this.http
        .get(apiURL)
        .toPromise()
        .then((res: any) => {
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
  
}
