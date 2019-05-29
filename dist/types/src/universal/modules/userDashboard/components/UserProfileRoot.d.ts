import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RouteComponentProps<{
    teamId: string;
}> {
}
declare const _default: React.ComponentClass<Pick<Pick<Props, "history" | "location" | "match" | "staticContext">, never>, any>;
export default _default;
//# sourceMappingURL=UserProfileRoot.d.ts.map