import React, { Component, Ref } from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithFormProps } from '../utils/relay/withForm';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, WithFormProps, RouteComponentProps<{}> {
    email: string;
    isPrimary?: boolean;
    isSignin?: boolean;
    existingAccount?: boolean;
    fieldsRef?: Ref<any>;
}
export declare class EmailPasswordAuthFormBase extends Component<Props> {
    componentDidUpdate(prevProps: Props): void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    tryLogin: (email: string, password: string, handleError?: (() => void) | undefined) => Promise<void>;
    trySignUp: (email: any, password: any) => Promise<void>;
    onSubmit: (e: React.FormEvent<Element>) => Promise<void>;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "ref" | "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">, "email" | "atmosphere" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef"> & React.RefAttributes<any>, "ref" | "email" | "existingAccount" | "key" | "isPrimary" | "isSignin" | "fieldsRef">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<import("../Atmosphere").default | import("../modules/demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=EmailPasswordAuthForm.d.ts.map