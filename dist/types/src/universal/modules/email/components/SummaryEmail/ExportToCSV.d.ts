import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { MeetingSummaryReferrer } from './MeetingSummaryEmail/MeetingSummaryEmail';
interface Props extends WithAtmosphereProps, WithMutationProps {
    meetingId: string;
    urlAction?: 'csv' | undefined;
    emailCSVUrl: string;
    referrer: MeetingSummaryReferrer;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer"> & React.RefAttributes<any>, "ref" | "key" | "meetingId" | "urlAction" | "emailCSVUrl" | "referrer">> & Readonly<{
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
//# sourceMappingURL=ExportToCSV.d.ts.map