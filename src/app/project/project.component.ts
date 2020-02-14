import { Router } from '@angular/router';
import { StorageService } from './../storage.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('project-name') projectName;
  isdisplayChildren: boolean;

  constructor(
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit() {
  }

  displayActivities(projectName: string){

    this.router.navigate(['/projects', this.projectName]);

  }

}
