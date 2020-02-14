import { Activity } from './../models/activity';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { Project } from './../models/project';
import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  project: Project;
  activities: Activity[];
  navigationSubscription;
  hideActivity = false;
  activityName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService) { }

  ngOnInit() {  
      let projectName = this.route.snapshot.paramMap.get('projectName');
      this.project = this.storageService.getProject(projectName);
    }
    
  addList(){

  }

  createActivity(activityName:string){
    this.storageService.createActivity(this.project, activityName)
    this.activityName = ""
     // refresh page
     let currentLocation = this.router.url;
     this.router.navigateByUrl('/refresh', {skipLocationChange: true})
     .then(p => this.router.navigateByUrl(currentLocation));  
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

}
