import { ModuleIntegration_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface FormProps extends ModuleIntegration_BaseFragmentFragment {
  submitted?: boolean;
  hasSuccessMessage?: boolean;
}

export interface FormClasses {
  root: string;
  formContainer: string;
  formOuterContainer: string;
}

export declare type FormClassKey = keyof FormClasses;
