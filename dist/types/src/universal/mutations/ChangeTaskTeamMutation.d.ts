import Atmosphere from 'universal/Atmosphere';
import { IChangeTaskTeamOnMutationArguments } from 'universal/types/graphql';
import { RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime';
import { ChangeTaskTeamMutation } from '__generated__/ChangeTaskTeamMutation.graphql';
import { ChangeTaskTeamMutation_task } from '__generated__/ChangeTaskTeamMutation_task.graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
export declare const changeTaskTeamTaskUpdater: (payload: RecordProxy<ChangeTaskTeamMutation_task>, { store }: {
    store: RecordSourceSelectorProxy<{
        [key: string]: any;
    }>;
}) => void;
declare const ChangeTaskTeamMutation: (atmosphere: Atmosphere, variables: IChangeTaskTeamOnMutationArguments, { onError, onCompleted }: LocalHandlers) => import("relay-runtime").Disposable;
export default ChangeTaskTeamMutation;
//# sourceMappingURL=ChangeTaskTeamMutation.d.ts.map