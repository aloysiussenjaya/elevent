import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
interface User{
    username: string,
    uid: string
}

@Injectable()
export class UserService{
    private user: User

    constructor(
        private afAuth: AngularFireAuth
    ){

    }

    setUser(user:User){
        this.user = user
    }

    getUID(){
        if(!this.user){
            if(this.afAuth.auth.currentUser){
                const user = this.afAuth.auth.currentUser
                this.setUser({
                    username: user.email.split('@')[0],
                    uid: user.uid
                })
                return user.uid
            }else{
                throw new Error("User not logged in")
            }
        }else{
            return this.user.uid
        }
        return this.user.uid
    }
    getUsername(){
        
        return this.user.username
    }
}