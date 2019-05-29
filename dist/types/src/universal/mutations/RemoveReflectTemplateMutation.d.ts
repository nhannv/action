import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { CompletedHandler, ErrorHandler, TeamUpdater } from '../types/relayMutations';
import { IRemoveReflectTemplateOnMutationArguments } from 'universal/types/graphql';
export declare const removeReflectTemplateTeamUpdater: TeamUpdater;
declare const RemoveReflectTemplateMutation: (atmosphere: Atmosphere, variables: IRemoveReflectTemplateOnMutationArguments, _context: {}, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default RemoveReflectTemplateMutation;
//# sourceMappingURL=RemoveReflectTemplateMutation.d.ts.map