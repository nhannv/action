import { LoginMutation, LoginMutationVariables } from '__generated__/LoginMutation.graphql';
import { Disposable } from 'relay-runtime';
import { LocalHandlers } from '../types/relayMutations';
declare const LoginMutation: (atmosphere: any, variables: Pick<LoginMutationVariables, "auth0Token" | "invitationToken" | "segmentId">, { onCompleted, history }: LocalHandlers) => Disposable;
export default LoginMutation;
//# sourceMappingURL=LoginMutation.d.ts.map