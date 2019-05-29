import { Disposable, RecordSourceProxy } from 'relay-runtime';
import { StartDraggingReflectionMutation, StartDraggingReflectionMutationVariables } from '../../__generated__/StartDraggingReflectionMutation.graphql';
import { Coords } from '../../types/animations';
import { MasonryAtmosphere } from '../components/PhaseItemMasonry';
import { CompletedHandler, ErrorHandler } from '../types/relayMutations';
declare type Context = {
    initialCursorCoords: Coords;
    meetingId: string;
};
interface UpdaterOptions {
    atmosphere: MasonryAtmosphere;
    store: RecordSourceProxy;
}
export declare const startDraggingReflectionTeamUpdater: (payload: any, { atmosphere, store }: UpdaterOptions) => boolean | undefined;
declare const StartDraggingReflectionMutation: (atmosphere: MasonryAtmosphere, variables: StartDraggingReflectionMutationVariables, context: Context, onError?: ErrorHandler | undefined, onCompleted?: CompletedHandler | undefined) => Disposable;
export default StartDraggingReflectionMutation;
//# sourceMappingURL=StartDraggingReflectionMutation.d.ts.map