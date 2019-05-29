import { Disposable } from 'relay-runtime';
import { IAddProviderOnMutationArguments } from '../types/graphql';
import { CompletedHandler, ErrorHandler } from '../types/relayMutations';
export declare const addProviderIntegrationUpdater: (payload: any, store: any, { atmosphere, teamId }: {
    atmosphere: any;
    teamId: any;
}) => void;
declare const AddProviderMutation: (atmosphere: any, variables: IAddProviderOnMutationArguments, _context: any, onError: ErrorHandler, onCompleted: CompletedHandler) => Disposable;
export default AddProviderMutation;
//# sourceMappingURL=AddProviderMutation.d.ts.map