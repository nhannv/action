import { ProviderRow_providerDetails } from '__generated__/ProviderRow_providerDetails.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { Providers } from 'universal/types/constEnums';
export declare const providerLookup: {
    [x: number]: {
        description: Providers;
        providerName: Providers;
        route: string;
        makeUri: (state: any) => string;
    };
    atlassian: {
        makeUri: (state: any) => string;
    };
};
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    comingSoon?: boolean;
    name: string;
    providerDetails: ProviderRow_providerDetails;
    teamId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "name" | "teamId" | "comingSoon" | "providerDetails">, "atmosphere" | "name" | "teamId" | "comingSoon" | "providerDetails"> & React.RefAttributes<any>, "ref" | "key" | "name" | "teamId" | "comingSoon" | "providerDetails">, "ref" | "key" | "name" | "teamId" | "comingSoon" | "providerDetails">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ProviderRow.d.ts.map