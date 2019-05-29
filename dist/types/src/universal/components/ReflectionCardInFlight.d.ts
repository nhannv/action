import { ReflectionCardInFlight_reflection } from '__generated__/ReflectionCardInFlight_reflection.graphql';
import React from 'react';
import { MasonryChildrenCache, MasonryItemCache, MasonryParentCache, SetInFlightCoords } from 'universal/components/PhaseItemMasonry';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps {
    itemCache: MasonryItemCache;
    childrenCache: MasonryChildrenCache;
    parentCache: MasonryParentCache;
    reflection: ReflectionCardInFlight_reflection;
    setInFlightCoords: SetInFlightCoords;
    teamId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "teamId" | "itemCache" | "reflection" | "childrenCache" | "parentCache" | "setInFlightCoords">, "teamId" | "itemCache" | "reflection" | "childrenCache" | "parentCache" | "setInFlightCoords">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ReflectionCardInFlight.d.ts.map