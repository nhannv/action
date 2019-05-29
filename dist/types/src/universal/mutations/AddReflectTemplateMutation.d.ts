import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { IAddReflectTemplateOnMutationArguments } from 'universal/types/graphql';
import { CompletedHandler, ErrorHandler, TeamUpdater } from '../types/relayMutations';
export declare const addReflectTemplateTeamUpdater: TeamUpdater;
declare const AddReflectTemplateMutation: (atmosphere: Atmosphere, variables: IAddReflectTemplateOnMutationArguments, _context: {}, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default AddReflectTemplateMutation;
//# sourceMappingURL=AddReflectTemplateMutation.d.ts.map