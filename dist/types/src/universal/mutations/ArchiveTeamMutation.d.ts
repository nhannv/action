import { ArchiveTeamMutation, ArchiveTeamMutationVariables } from '__generated__/ArchiveTeamMutation.graphql';
import { ArchiveTeamMutation_team } from '__generated__/ArchiveTeamMutation_team.graphql';
import { Disposable } from 'relay-runtime';
import Atmosphere from '../Atmosphere';
import { LocalHandlers } from '../types/relayMutations';
export declare const archiveTeamTeamUpdater: (payload: any, store: any, viewerId: any) => void;
export declare const archiveTeamTeamOnNext: (payload: ArchiveTeamMutation_team, { atmosphere, history }: {
    atmosphere: any;
    history: any;
}) => void;
declare const ArchiveTeamMutation: (atmosphere: Atmosphere, variables: ArchiveTeamMutationVariables, { onError, onCompleted, history }: LocalHandlers) => Disposable;
export default ArchiveTeamMutation;
//# sourceMappingURL=ArchiveTeamMutation.d.ts.map