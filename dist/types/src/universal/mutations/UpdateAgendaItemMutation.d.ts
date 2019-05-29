import { RecordProxy } from 'relay-runtime';
import Atmosphere from 'universal/Atmosphere';
import { IUpdateAgendaItemOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
import { UpdateAgendaItemMutation } from '__generated__/UpdateAgendaItemMutation.graphql';
export declare const updateAgendaItemUpdater: (payload: RecordProxy<{
    [key: string]: any;
}>, { store }: {
    store: any;
}) => void;
declare const UpdateAgendaItemMutation: (atmosphere: Atmosphere, variables: IUpdateAgendaItemOnMutationArguments, { onError, onCompleted }?: LocalHandlers) => import("relay-runtime").Disposable;
export default UpdateAgendaItemMutation;
//# sourceMappingURL=UpdateAgendaItemMutation.d.ts.map