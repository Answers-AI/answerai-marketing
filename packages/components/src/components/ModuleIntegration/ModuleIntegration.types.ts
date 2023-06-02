import { ModuleIntegration_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface ModuleIntegrationProps extends ModuleIntegration_BaseFragmentFragment {}

export interface ModuleIntegrationClasses {
  root: string;
}

export declare type ModuleIntegrationClassKey = keyof ModuleIntegrationClasses;
