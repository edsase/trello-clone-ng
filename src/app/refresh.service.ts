import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(private router: Router) { }

  refresh(){
    let currentLocation = this.router.url;
    this.router.navigateByUrl('/refresh', {skipLocationChange: true})
    .then(p => this.router.navigateByUrl(currentLocation));  
  }
}
