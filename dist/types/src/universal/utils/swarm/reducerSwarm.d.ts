import MediaSwarm from 'universal/utils/swarm/MediaSwarm';
import { StreamDict, StreamUI } from '../../hooks/useSwarm';
import { StreamName } from './joinSwarm';
interface AddSwarm {
    type: 'addSwarm';
    swarm: MediaSwarm;
}
interface SetStream {
    type: 'setStream';
    userId: string;
    streamName: StreamName;
    streamUI: Partial<StreamUI>;
}
interface RemoveStream {
    type: 'removeStream';
    userId: string;
}
export declare type SwarmAction = SetStream | AddSwarm | RemoveStream;
export interface SwarmState {
    streams: StreamDict;
    swarm: MediaSwarm | null;
}
declare const reducerSwarm: (state: SwarmState, action: SwarmAction) => SwarmState;
export default reducerSwarm;
//# sourceMappingURL=reducerSwarm.d.ts.map