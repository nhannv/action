import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    picture: string;
    orgId: string;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "picture" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "picture" | "key" | "orgId">> & Readonly<{
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
//# sourceMappingURL=OrgAvatarInput.d.ts.map