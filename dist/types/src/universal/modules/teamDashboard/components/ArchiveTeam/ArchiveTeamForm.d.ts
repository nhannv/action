import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithFormProps } from 'universal/utils/relay/withForm';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}>, WithFormProps {
    handleFormBlur: () => any;
    teamName: string;
    teamId: string;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "ref" | "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur">, "atmosphere" | "key" | "teamId" | "teamName" | "handleFormBlur"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "teamName" | "handleFormBlur">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<import("../../../../Atmosphere").default | import("../../../demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=ArchiveTeamForm.d.ts.map