import { Injectable } from '@angular/core'
interface User{
    username: string,
    uid: string
}

@Injectable()
export class UserService{
    private user: User

    constructor(){

    }

    setUser(user:User){
        this.user = user
    }

    getUID(){
        return this.user.uid
    }
    getUsername(){
        return this.user.username
    }
}