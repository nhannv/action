import Atmosphere from 'universal/Atmosphere';
import { IRemoveAgendaItemOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
import { RemoveAgendaItemMutation } from '__generated__/RemoveAgendaItemMutation.graphql';
export declare const removeAgendaItemUpdater: (payload: any, { store }: {
    store: any;
}) => void;
declare const RemoveAgendaItemMutation: (atmosphere: Atmosphere, variables: IRemoveAgendaItemOnMutationArguments, { onError, onCompleted }?: LocalHandlers) => import("relay-runtime").Disposable;
export default RemoveAgendaItemMutation;
//# sourceMappingURL=RemoveAgendaItemMutation.d.ts.map