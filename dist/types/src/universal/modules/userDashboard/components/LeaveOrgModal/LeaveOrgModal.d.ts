import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    orgId: string;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "atmosphere" | "orgId"> & React.RefAttributes<any>, "ref" | "history" | "location" | "match" | "staticContext" | "key" | "orgId">, "ref" | "key" | "orgId">, any>;
export default _default;
//# sourceMappingURL=LeaveOrgModal.d.ts.map