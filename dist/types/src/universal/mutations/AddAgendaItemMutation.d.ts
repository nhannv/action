import Atmosphere from 'universal/Atmosphere';
import { IAddAgendaItemOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
import { AddAgendaItemMutation } from '__generated__/AddAgendaItemMutation.graphql';
export declare const addAgendaItemUpdater: (payload: any, { store }: {
    store: any;
}) => void;
declare const AddAgendaItemMutation: (atmosphere: Atmosphere, variables: IAddAgendaItemOnMutationArguments, { onError, onCompleted }: LocalHandlers) => import("relay-runtime").Disposable;
export default AddAgendaItemMutation;
//# sourceMappingURL=AddAgendaItemMutation.d.ts.map