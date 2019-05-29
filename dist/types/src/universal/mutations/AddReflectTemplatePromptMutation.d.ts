import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { CompletedHandler, ErrorHandler, TeamUpdater } from '../types/relayMutations';
import { IAddReflectTemplatePromptOnMutationArguments } from 'universal/types/graphql';
interface Context {
    promptCount: number;
    sortOrder: number;
}
export declare const addReflectTemplatePromptTeamUpdater: TeamUpdater;
declare const AddReflectTemplatePromptMutation: (atmosphere: Atmosphere, variables: IAddReflectTemplatePromptOnMutationArguments, context: Context, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default AddReflectTemplatePromptMutation;
//# sourceMappingURL=AddReflectTemplatePromptMutation.d.ts.map