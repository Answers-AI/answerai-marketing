import { ModuleIntegration_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface FormProps extends Form_BaseFragmentFragment {
  submitted?: boolean;
  hasSuccessMessage?: boolean;
  settings?: any;
}

export interface FormClasses {
  root: string;
  formContainer: string;
  formOuterContainer: string;
}

export declare type FormClassKey = keyof FormClasses;
