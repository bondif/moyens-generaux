import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';


export abstract class GenericService<Entity> {
  // @ts-ignore
  protected auth: AuthenticationService = new AuthenticationService();

  protected constructor(protected http: HttpClient, protected BASE_URL: string) {
  }

  token: any = 'Bearer ' + this.auth.currentUserValue();
  headers = {headers: {'Authorization': this.token}};

  getAll() {
    return this.http.get(this.BASE_URL, this.headers)
      .toPromise()
      .then(res => <Entity[]> res)
      .then(data => {
        return data;
      });
  }

  getPage(page, size) {
    return this.http.get(this.BASE_URL + '?page=' + page + '&size=' + size, this.headers)
      .toPromise()
      .then(res => <any[]> res)
      .then(data => {
        return data;
      });
  }

  getOne(id) {
    return this.http.get(this.BASE_URL + '/' + id, this.headers)
      .toPromise()
      .then(res => <Entity> res)
      .then(data => {
        return data;
      });
  }

  save(entity: Entity) {
    return this.http.post(this.BASE_URL, entity, this.headers)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  update(entity: Entity, id) {
    return this.http.put(this.BASE_URL + '/' + id, entity, this.headers)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  delete(id) {
    return this.http.delete(this.BASE_URL + '/' + id, this.headers)
      .toPromise()
      .then(data => {
        return data;
      });
  }


}
