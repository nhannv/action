import { Disposable } from 'relay-runtime';
import Atmosphere from '../Atmosphere';
import { UpdateOrgMutation, UpdateOrgMutationVariables } from '__generated__/UpdateOrgMutation.graphql';
import { LocalHandlers } from '../types/relayMutations';
declare const UpdateOrgMutation: (atmosphere: Atmosphere, variables: UpdateOrgMutationVariables, { onCompleted, onError }: LocalHandlers) => Disposable;
export default UpdateOrgMutation;
//# sourceMappingURL=UpdateOrgMutation.d.ts.map