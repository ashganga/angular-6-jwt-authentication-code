import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalEventsManager } from '../_helpers/global.event.manager';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private globalEventsManager: GlobalEventsManager) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            //User is authenticated and availabe in localstorage hence emitting event to show the Navigation Menu
            this.globalEventsManager.showNavBar.emit(true);
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //and emitting an event to hide the Navigation Menu
        this.globalEventsManager.hideNavBar.emit(true);
        return false;
    }
}