import React from 'react';
export interface ErrorObject {
    [field: string]: string | undefined;
}
export interface WithMutationProps {
    dirty: boolean | undefined;
    error: ErrorObject | string | undefined;
    onCompleted: (res?: any, errors?: any) => void;
    onError: (error?: any) => void;
    setDirty: () => void;
    submitMutation: () => void;
    submitting: boolean | undefined;
}
export declare type MenuMutationProps = Pick<WithMutationProps, 'onCompleted' | 'onError' | 'submitMutation' | 'submitting'>;
export interface MutationServerError {
    message: string;
    path: Array<string>;
}
export declare const formatError: (rawError?: string | ErrorObject | MutationServerError | MutationServerError[] | undefined) => string | ErrorObject | undefined;
declare const withMutationProps: <P extends WithMutationProps>(ComposedComponent: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Pick<P, Exclude<keyof P, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting">>> & React.RefAttributes<any>>;
export default withMutationProps;
//# sourceMappingURL=withMutationProps.d.ts.map