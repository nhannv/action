import { Environment } from 'relay-runtime';
import { CompletedHandler, ErrorHandler } from '../types/relayMutations';
import { IEditReflectionOnMutationArguments } from 'universal/types/graphql';
export declare const editReflectionTeamUpdater: (payload: any, store: any) => void;
declare const EditReflectionMutation: (atmosphere: Environment, variables: IEditReflectionOnMutationArguments, onError?: ErrorHandler | undefined, onCompleted?: CompletedHandler | undefined) => void;
export default EditReflectionMutation;
//# sourceMappingURL=EditReflectionMutation.d.ts.map