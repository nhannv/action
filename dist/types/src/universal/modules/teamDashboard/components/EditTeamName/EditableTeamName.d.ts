import { EditableTeamName_team } from '__generated__/EditableTeamName_team.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    team: EditableTeamName_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "team"> & React.RefAttributes<any>, "ref" | "key" | "team">, "ref" | "key" | "team">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=EditableTeamName.d.ts.map