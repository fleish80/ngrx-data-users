import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data';
import {userMetadata} from './user.metadata';

const entityMetadata: EntityMetadataMap = {
  User: userMetadata
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata
};
