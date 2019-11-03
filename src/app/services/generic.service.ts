import {HttpClient} from '@angular/common/http';


export abstract class GenericService<Entity> {

  protected constructor(protected http: HttpClient, protected BASE_URL: string) {
  }

  getAll() {
    return this.http.get(this.BASE_URL)
      .toPromise()
      .then(res => <Entity[]> res)
      .then(data => {
        return data;
      });
  }

  getPage(page, size) {
    return this.http.get(this.BASE_URL + '?page=' + page + '&size=' + size)
      .toPromise()
      .then(res => <any[]> res)
      .then(data => {
        return data;
      });
  }

  getOne(id) {
    return this.http.get(this.BASE_URL + id)
      .toPromise()
      .then(res => <Entity> res)
      .then(data => {
        return data;
      });
  }

  save(entity: Entity) {
    return this.http.post(this.BASE_URL, entity)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  update(entity: Entity, id) {
    return this.http.put(this.BASE_URL + id, entity)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  delete(id) {
    return this.http.delete(this.BASE_URL + id)
      .toPromise()
      .then(data => {
        return data;
      });
  }


}
