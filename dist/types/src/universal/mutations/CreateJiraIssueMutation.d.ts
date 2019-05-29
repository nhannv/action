import { ICreateJiraIssueOnMutationArguments } from 'universal/types/graphql';
import Atmosphere from 'universal/Atmosphere';
import { LocalHandlers } from 'universal/types/relayMutations';
import { CreateJiraIssueMutation } from '__generated__/CreateJiraIssueMutation.graphql';
declare const CreateJiraIssueMutation: (atmosphere: Atmosphere, variables: ICreateJiraIssueOnMutationArguments, { onCompleted, onError }: LocalHandlers) => import("relay-runtime").Disposable;
export default CreateJiraIssueMutation;
//# sourceMappingURL=CreateJiraIssueMutation.d.ts.map