import { Project } from './models/project';
import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trello-clone';

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService){};  

  ngOnInit() {

  }

}
