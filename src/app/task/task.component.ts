import { Component, OnInit } from '@angular/core';
import {NotificationService } from '../notification.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private notifyService: NotificationService) { }

  ngOnInit(): void {
  }
  showToastr(){
    this.notifyService.showSuccess(" Your data added successfully","Hello User");
    
  }

}
