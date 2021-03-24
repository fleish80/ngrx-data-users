import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from './user.model';

export const loadUsers = createAction(
    '[User] Load'
);

export const loadUsersSuccess = createAction(
    '[User] Load Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[User] Load Fail',
    props<{ error: HttpErrorResponse }>()
);

