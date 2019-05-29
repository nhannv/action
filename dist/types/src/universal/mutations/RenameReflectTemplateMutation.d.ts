import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { CompletedHandler, ErrorHandler } from '../types/relayMutations';
import { IRenameReflectTemplateOnMutationArguments } from 'universal/types/graphql';
declare const RenameReflectTemplateMutation: (atmosphere: Atmosphere, variables: IRenameReflectTemplateOnMutationArguments, _context: {}, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default RenameReflectTemplateMutation;
//# sourceMappingURL=RenameReflectTemplateMutation.d.ts.map