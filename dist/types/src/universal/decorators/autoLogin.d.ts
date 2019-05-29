import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
export interface AutoLoginPropsProps extends WithAtmosphereProps, RouteComponentProps<{}> {
}
declare const autoLogin: (ComposedComponent: React.ComponentType<any>) => React.ComponentClass<Pick<Pick<AutoLoginPropsProps, "history" | "location" | "match" | "staticContext">, never>, any>;
export default autoLogin;
//# sourceMappingURL=autoLogin.d.ts.map