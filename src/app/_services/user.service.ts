import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User , Menu } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getUserInfo(id: number) {
        return this.http.get<User[]>(`${config.apiUrl}/users?id=` + id);
    }

    getUserMenu(id : number) {
        return this.http.get<Menu[]>(`${config.apiUrl}/users/menu?id=` + id);
    }

}

   