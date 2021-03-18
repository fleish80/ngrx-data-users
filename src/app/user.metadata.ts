import {EntityMetadata} from '@ngrx/data';
import {User} from './user.model';

export const userMetadata: EntityMetadata<User> = {
    entityName: 'User',
    selectId: user => user._id,

}
