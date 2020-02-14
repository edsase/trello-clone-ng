import { SubActivity } from './models/sub-activity';
import { Activity } from './models/activity';
import { Project } from './models/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  createProject(projectName:string) {
    // get projects
    let projects = this.getProjects();
    projects.push({name: projectName, activities: []});
    // save to local storage
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  getProjects(): Project[] {
    let projects = localStorage.getItem('projects');

    if (!projects) {
      localStorage.setItem('projects', JSON.stringify([]));
      return [] 
    }

    return JSON.parse(projects);
  }

  getProject(projectName: string): Project {
    let projects = this.getProjects();
    let project = projects.find(p => p.name === projectName);
    return <Project>project;
  }

  updateProjects(project:Project){
    let projects = this.getProjects();
    let indx = projects.findIndex(p => p.name === project.name);
    projects.splice(indx,1,project);
    // save to local storage
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  createActivity(projectO: Project, activityName: string, subActivity?: string) {
    let project = this.getProject(projectO.name);
    let activity = subActivity? {name: activityName, activityList: [{name: subActivity, done: false}]} : {name: activityName, activityList: []}
    project.activities.push(activity)
    // update project obj
    this.updateProjects(project);
  }

  getActivity(projectO: Project, activityName: string): Activity{
    let activity = projectO.activities.find(a => a.name===activityName);
    return activity;
  }

  updateActivity(projectName: string, activityName: string, subActivity: SubActivity) {
    let project = this.getProject(projectName);
    // get activity
    let activity = this.getActivity(project, activityName);
    if (!activity){
      this.createActivity(project, activityName, subActivity.name);
    } else {
      activity.activityList.splice(0, 0, subActivity);
      // update project obj
      this.updateProjects(project)
    }
    
  }

}
