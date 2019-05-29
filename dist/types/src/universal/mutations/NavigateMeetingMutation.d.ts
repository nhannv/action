import { NavigateMeetingMutation, NavigateMeetingMutationVariables } from '__generated__/NavigateMeetingMutation.graphql';
import { NavigateMeetingMutation_team } from '__generated__/NavigateMeetingMutation_team.graphql';
import { RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime';
import Atmosphere from '../Atmosphere';
export declare const navigateMeetingTeamUpdater: (payload: RecordProxy<NavigateMeetingMutation_team>, store: RecordSourceSelectorProxy<{
    [key: string]: any;
}>) => void;
declare const NavigateMeetingMutation: (atmosphere: Atmosphere, variables: NavigateMeetingMutationVariables, onError?: any, onCompleted?: any) => import("relay-runtime").Disposable;
export default NavigateMeetingMutation;
//# sourceMappingURL=NavigateMeetingMutation.d.ts.map