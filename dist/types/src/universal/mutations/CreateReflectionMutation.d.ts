import { Disposable } from 'relay-runtime';
import { CompletedHandler, ErrorHandler } from 'universal/types/relayMutations';
import { ICreateReflectionOnMutationArguments } from 'universal/types/graphql';
interface Context {
    meetingId: string;
}
export declare const createReflectionTeamUpdater: (payload: any, store: any) => void;
declare const CreateReflectionMutation: (atmosphere: any, variables: ICreateReflectionOnMutationArguments, context: Context, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default CreateReflectionMutation;
//# sourceMappingURL=CreateReflectionMutation.d.ts.map