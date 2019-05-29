import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    accessToken: string;
    subbedChannels: ReadonlyArray<any>;
    teamMemberId: string;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "teamMemberId" | "accessToken" | "subbedChannels"> & React.RefAttributes<any>, "ref" | "key" | "teamMemberId" | "accessToken" | "subbedChannels">> & Readonly<{
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
//# sourceMappingURL=AddSlackChannel.d.ts.map