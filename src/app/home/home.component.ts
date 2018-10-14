import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getUserInfo(currentUser.id).pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}