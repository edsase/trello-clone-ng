import { Project } from './../models/project';
import { StorageService } from './../storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) { }

  getProjects(){
    return this.storageService.getProjects();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.projects = this.getProjects();
    }
    )}

}
