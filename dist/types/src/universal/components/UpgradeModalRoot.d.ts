import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RouteComponentProps<{}> {
    closePortal: () => void;
    orgId: string;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "orgId" | "closePortal">, "orgId" | "closePortal">> & Readonly<{
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
//# sourceMappingURL=UpgradeModalRoot.d.ts.map