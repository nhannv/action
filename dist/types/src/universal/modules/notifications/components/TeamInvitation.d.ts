import { TeamInvitation_notification } from '__generated__/TeamInvitation_notification.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    notification: TeamInvitation_notification;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "notification">, "atmosphere" | "notification"> & React.RefAttributes<any>, "ref" | "key" | "notification">, "ref" | "key" | "notification">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamInvitation.d.ts.map