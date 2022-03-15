import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {VaccineScheduleComponent} from '../vaccine-schedule/vaccine-schedule.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void{
   this.usersService.getUser().subscribe(user => {
     this.user = user;
   });
  }

}
