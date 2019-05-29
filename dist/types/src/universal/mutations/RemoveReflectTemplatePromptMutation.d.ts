import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { CompletedHandler, ErrorHandler, TeamUpdater } from '../types/relayMutations';
import { IRemoveReflectTemplatePromptOnMutationArguments } from 'universal/types/graphql';
export declare const removeReflectTemplatePromptTeamUpdater: TeamUpdater;
declare const RemoveReflectTemplatePromptMutation: (atmosphere: Atmosphere, variables: IRemoveReflectTemplatePromptOnMutationArguments, _context: {}, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default RemoveReflectTemplatePromptMutation;
//# sourceMappingURL=RemoveReflectTemplatePromptMutation.d.ts.map