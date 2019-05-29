import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { SlackIntegrations_viewer } from '__generated__/SlackIntegrations_viewer.graphql';
interface Props extends WithMutationProps, WithAtmosphereProps {
    teamId: string;
    viewer: SlackIntegrations_viewer;
    teamMemberId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "viewer" | "teamMemberId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=SlackIntegrations.d.ts.map