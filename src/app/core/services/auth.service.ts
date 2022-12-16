import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token = 'token';

    getToken(): string {
        return(this.token);
    }
}