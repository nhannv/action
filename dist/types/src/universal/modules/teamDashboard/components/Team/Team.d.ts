import { Team_team } from '__generated__/Team_team.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RouteComponentProps<{}> {
    team: Team_team | null;
    isSettings: boolean;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "team" | "isSettings">, "team" | "isSettings">, "team" | "isSettings">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=Team.d.ts.map