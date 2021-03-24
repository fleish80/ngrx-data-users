import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import * as UserActions from './user.actions';
import {User} from './user.model';


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions,
                private userService: UserService) {
    }

    loadUsers$ = createEffect(() => this.actions$
        .pipe(
            ofType(UserActions.loadUsers),
            mergeMap(() => this.userService.loadUsers()
                .pipe(
                    map((users: User[]) => UserActions.loadUsersSuccess({users})),
                    // catchError((error: HttpErrorResponse) => of(OrganizationActions.loadOrganizationsFailure({error})))
                )
            )
        ));
}
