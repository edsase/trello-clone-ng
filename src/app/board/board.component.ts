import { Router } from '@angular/router';
import { StorageService } from './../storage.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Output('hide-board') hideBoardEmitter = new EventEmitter()
  formData: {name: string} = {name: null}

  constructor(
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit() {
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  onClose() {
    this.hideBoardEmitter.emit(null);
  }

  onSubmit(){
    this.storageService.createProject(this.formData.name);
    this.hideBoardEmitter.emit(this.formData.name);
    // refresh page
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/refresh', {skipLocationChange: true})
    .then (
      p => this.router.navigateByUrl(currentUrl)
    )
    
  }

}
