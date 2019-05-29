import React from 'react';
import Atmosphere from 'universal/Atmosphere';
export interface WithAtmosphereProps {
    atmosphere: Atmosphere;
}
declare const _default: <P extends WithAtmosphereProps>(ComposedComponent: React.ComponentType<P>) => {
    new (props: Readonly<Pick<P, Exclude<keyof P, "atmosphere">>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<P, Exclude<keyof P, "atmosphere">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, Exclude<keyof P, "atmosphere">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<P, Exclude<keyof P, "atmosphere">>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<P, Exclude<keyof P, "atmosphere">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, Exclude<keyof P, "atmosphere">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<Atmosphere | import("../../modules/demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=withAtmosphere.d.ts.map