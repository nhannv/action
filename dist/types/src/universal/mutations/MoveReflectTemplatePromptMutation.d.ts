import { Disposable } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { IMoveReflectTemplatePromptOnMutationArguments } from 'universal/types/graphql';
interface Context {
    templateId: string;
}
export declare const moveReflectTemplatePromptTeamUpdater: (payload: any, { store }: {
    store: any;
}) => void;
declare const MoveReflectTemplatePromptMutation: (atmosphere: Atmosphere, variables: IMoveReflectTemplatePromptOnMutationArguments, context: Context) => Disposable;
export default MoveReflectTemplatePromptMutation;
//# sourceMappingURL=MoveReflectTemplatePromptMutation.d.ts.map