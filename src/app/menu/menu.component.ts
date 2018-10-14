import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../_models/menu';
import { UserService } from '../_services';
import { HttpClient } from '@angular/common/http';
import { GlobalEventsManager } from "../_helpers/global.event.manager";
import { first } from 'rxjs/operators';

@Component({
    selector: 'nav',
    templateUrl: './menu.component.html'
})

export class MenuComponent {

    showNavBar: boolean = false;
    menuList: Menu[] = [];

    constructor(private http: HttpClient, private router: Router, private globalEventsManager: GlobalEventsManager, private userService: UserService) {

        //subscribing here the showNavBar emitted event
        this.globalEventsManager.showNavBar.subscribe((mode: any) => {
            this.showNavBar = mode;

            // get only the Menu for which current logged in User has the access.
            if (this.showNavBar == true) {
                let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.userService.getUserMenu(currentUser.id).pipe(first()).subscribe(menuList => {
                    this.menuList = menuList;
                });
            }
        });

        //subscribing the hideNavBar event.
        this.globalEventsManager.hideNavBar.subscribe((mode: any) => {
            this.showNavBar = false;
            this.menuList = [];
        });
    }
}