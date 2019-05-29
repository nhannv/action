import Atmosphere from 'universal/Atmosphere';
import { IntegrationServiceEnum } from 'universal/types/graphql';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Config {
    name: IntegrationServiceEnum;
    submitting?: boolean;
    submitMutation: WithMutationProps['submitMutation'];
    onError: WithMutationProps['onError'];
    onCompleted: WithMutationProps['onCompleted'];
    atmosphere: Atmosphere;
    teamId: string;
}
declare const handleOpenOAuth: ({ name, submitting, submitMutation, atmosphere, onError, onCompleted, teamId }: Config) => () => void;
export default handleOpenOAuth;
//# sourceMappingURL=handleOpenOAuth.d.ts.map