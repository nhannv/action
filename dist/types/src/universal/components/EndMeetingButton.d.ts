import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    meetingId: string;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "atmosphere" | "meetingId"> & React.RefAttributes<any>, "ref" | "history" | "location" | "match" | "staticContext" | "key" | "meetingId">, "ref" | "key" | "meetingId">, any>;
export default _default;
//# sourceMappingURL=EndMeetingButton.d.ts.map