/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps {
}
declare const _default: {
    new (props: Readonly<Pick<Props, never>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Props, never>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props, never>> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    new (props: Pick<Props, never>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Props, never>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props, never>> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    displayName: string;
    contextType: import("react").Context<import("../Atmosphere").default | import("../modules/demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=SocketHealthMonitor.d.ts.map