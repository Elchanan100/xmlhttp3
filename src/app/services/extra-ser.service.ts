import { Injectable } from '@angular/core';
import { modelUsers } from '../models/modelUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraSerService {

   aereeUsers :modelUsers[]=[ ]
   currentUsers:modelUsers
  pethUsers:string = "https://jsonplaceholder.typicode.com/users"
  pethPosts:string = "https://jsonplaceholder.typicode.com/posts"
  pethTodos:string = "https://jsonplaceholder.typicode.com/todos"
  constructor( public http:HttpClient) {
    
     console.log(this.aereeUsers)   
  }
  getUsersPosts(){
    this.http.get(this.pethUsers).subscribe(d => this.aereeUsers = d as modelUsers[])
    }
  getDataPosts():Observable<modelUsers[]>{
  return this.http.get<modelUsers[]>(this.pethPosts)
  }
  getDataTodos():Observable<modelUsers[]>{
  return this.http.get<modelUsers[]>(this.pethTodos)
  }
}
