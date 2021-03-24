import {Injectable} from '@angular/core';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  loadUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

}


// export class UserService extends EntityCollectionServiceBase<User> {
//
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('User', serviceElementsFactory)
//   }
// }
