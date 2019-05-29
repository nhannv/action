import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    orgId: string;
    userId: string;
    preferredName: string;
}
declare const _default: React.ComponentClass<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "atmosphere" | "preferredName" | "userId" | "orgId"> & React.RefAttributes<any>, "ref" | "history" | "location" | "match" | "staticContext" | "key" | "preferredName" | "userId" | "orgId">, "ref" | "key" | "preferredName" | "userId" | "orgId">, any>;
export default _default;
//# sourceMappingURL=RemoveFromOrgModal.d.ts.map