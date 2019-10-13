import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MyEvent{
  title : string;
  place : string;
  price : number;
  // date : number; att for date and time using datepicker as input
}

@Injectable({
  providedIn: 'root'
})
export class MyeventService {

  private myeventsCollection: AngularFirestoreCollection<MyEvent>;

  private myevents: Observable<MyEvent[]>;

  constructor(db: AngularFirestore) { 
    this.myeventsCollection = db.collection<MyEvent>('myevents');

    this.myevents = this.myeventsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getMyEvents(){
    return this.myevents;
  }
  
  getMyEvent(id){
    return this.myeventsCollection.doc<MyEvent>(id).valueChanges();
  }

  updateMyEvent(myevent: MyEvent, id: string){
    return this.myeventsCollection.doc(id).update(myevent);
  }

  addMyEvent(myevent:MyEvent){
    return this.myeventsCollection.add(myevent);
  }

  removeMyEvent(id){
    return this.myeventsCollection.doc(id).delete();
  }
}
