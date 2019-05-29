import FastRTCSwarm, { SwarmConfig } from '@mattkrick/fast-rtc-swarm';
import { Trebuchet } from '@mattkrick/trebuchet-client';
import { Dispatch, ReducerAction } from 'react';
import { StreamName } from './joinSwarm';
import reducerSwarm from './reducerSwarm';
export interface LocalQualityDict {
    low: MediaStream | null;
    med: MediaStream | null;
    high: MediaStream | null;
}
interface Config extends SwarmConfig {
    dispatchState: Dispatch<ReducerAction<typeof reducerSwarm>>;
    trebuchet: Trebuchet;
    userId: string;
}
export default class MediaSwarm extends FastRTCSwarm {
    trebuchet: Trebuchet;
    dispatchState: Dispatch<ReducerAction<typeof reducerSwarm>>;
    userId: string;
    localStreams: {
        cam: {
            low: MediaStream | null;
            med: MediaStream | null;
            high: MediaStream | null;
        };
        screen: {
            low: MediaStream | null;
            med: MediaStream | null;
            high: MediaStream | null;
        };
    };
    constructor(config: Config);
    private handleClose;
    private handleSignal;
    private handleStream;
    getStream: (streamName: StreamName, userId: string) => MediaStream | null;
    broadcastWebcam: (quality?: "audioOnly" | "low" | "lowVideo") => Promise<void>;
    muteWebcamAudio: () => void;
    muteWebcamVideo: () => void;
    dispose: () => void;
}
export {};
//# sourceMappingURL=MediaSwarm.d.ts.map