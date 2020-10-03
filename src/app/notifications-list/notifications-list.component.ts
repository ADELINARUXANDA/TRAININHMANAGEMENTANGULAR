import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../notification-data';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  
notifications: NotificationData[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
