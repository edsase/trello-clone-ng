import { SubActivity } from './../models/sub-activity';
import { RefreshService } from './../refresh.service';
import { Activity } from './../models/activity';
import { StorageService } from './../storage.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input('project-name') project: string;
  @Input('activity') activity: Activity;
  activityName;

  constructor(
    private refreshService: RefreshService,
    private storageService: StorageService) { }

  ngOnInit() {
    
  }

  createSubActivity(subActName) {
    if (!subActName) return
    let subActivityO = {name: subActName, done: false}
    this.storageService.updateActivity(this.project, this.activity.name, subActivityO)
    this.activityName = null;
    // refresh page
    this.refreshService.refresh();
  }

  onStatusChange(subAct: SubActivity){
    subAct.done = !subAct.done;
    console.log(subAct)
    this.storageService.updateActivity(this.project, this.activity.name, subAct)
    // refresh page
    this.refreshService.refresh();  
  }

}
