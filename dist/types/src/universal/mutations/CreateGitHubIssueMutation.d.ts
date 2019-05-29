import { CreateGitHubIssueMutation } from '__generated__/CreateGitHubIssueMutation.graphql';
import Atmosphere from 'universal/Atmosphere';
import { ICreateGitHubIssueOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
declare const CreateGitHubIssueMutation: (atmosphere: Atmosphere, variables: ICreateGitHubIssueOnMutationArguments, { onError, onCompleted }: LocalHandlers) => import("relay-runtime").Disposable;
export default CreateGitHubIssueMutation;
//# sourceMappingURL=CreateGitHubIssueMutation.d.ts.map