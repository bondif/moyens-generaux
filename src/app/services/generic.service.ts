import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class GenericService<Entity> {

  constructor(private http:HttpClient,private BASE_URL: string) { }

  getAll() {
    return this.http.get(this.BASE_URL)
      .toPromise()
      .then(res => <Entity[]> res)
      .then(data => { return data; });
  }

  getOne(id) {
    return this.http.get(this.BASE_URL +id)
      .toPromise()
      .then(res => <Entity> res)
      .then(data => { return data; });
  }

  save(entity:Entity) {
    return this.http.post(this.BASE_URL ,entity)
      .toPromise()
      .then(data => { return data; });
  }

  update(entity:Entity,id) {
    return this.http.put(this.BASE_URL + id,entity)
      .toPromise()
      .then(data => { return data; });
  }

  delete(id) {
    return this.http.delete(this.BASE_URL +id)
      .toPromise()
      .then(data => { return data; });
  }


}
