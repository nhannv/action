import { Disposable } from 'relay-runtime';
import { CompletedHandler, ErrorHandler } from 'universal/types/relayMutations';
import { IEndDraggingReflectionOnMutationArguments } from '../types/graphql';
interface Context {
    meetingId: string;
    newReflectionGroupId: string;
}
export declare const moveReflectionLocation: (reflection: any, reflectionGroup: any, oldReflectionGroupId: any, store: any, userId: any) => void;
export declare const endDraggingReflectionTeamUpdater: (payload: any, { store }: {
    store: any;
}) => void;
export declare const endDraggingReflectionTeamOnNext: (payload: any, context: any) => void;
declare const EndDraggingReflectionMutation: (atmosphere: any, variables: IEndDraggingReflectionOnMutationArguments, context: Context, onError?: ErrorHandler | undefined, onCompleted?: CompletedHandler | undefined) => Disposable;
export default EndDraggingReflectionMutation;
//# sourceMappingURL=EndDraggingReflectionMutation.d.ts.map