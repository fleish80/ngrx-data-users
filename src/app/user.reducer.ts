import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from './user.model';
import {createFeatureSelector, createReducer, on} from '@ngrx/store';
import * as UserActions from './user.actions';


export interface UserState extends EntityState<User> {
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: user => user._id,
    sortComparer: false
});

export const initialState: UserState = adapter.getInitialState(adapter.getInitialState());

export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUsersSuccess, (state, action ): UserState => {
        return adapter.setAll(action.users, state)
    })
);

const userFeatureState = createFeatureSelector<UserState>('users');

export const selectUsers = adapter.getSelectors(userFeatureState).selectAll;

