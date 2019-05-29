import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Atmosphere from '../../../Atmosphere';
interface Props extends RouteComponentProps<{
    urlAction?: 'csv';
    meetingId: string;
}> {
    atmosphere: Atmosphere;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere">, never>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere">, never>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere">, never>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere">, never>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere">, never>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere">, never>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<Atmosphere | import("../../demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=NewMeetingSummaryRoot.d.ts.map