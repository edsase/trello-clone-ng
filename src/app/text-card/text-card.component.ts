import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  hideBoard = false;

  projects: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addBoard(){
    this.hideBoard = true;
  }

  displayEntryBoard(boardName){
    if (boardName){
       // add the new project name to the list of projects
      this.projects.push(boardName);
    }
   
    this.hideBoard = false;
  }

}
