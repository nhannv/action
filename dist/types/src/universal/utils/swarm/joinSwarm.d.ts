import { Dispatch, MutableRefObject } from 'react';
import Atmosphere from '../../Atmosphere';
export declare type StreamName = 'cam' | 'screen';
export declare type StreamQuality = 'low' | 'med' | 'high';
declare const joinSwarm: (atmosphere: Atmosphere, roomId: string, dispatchState: Dispatch<import("./reducerSwarm").SwarmAction>, disposable: MutableRefObject<(() => void) | null | undefined>) => Promise<void>;
export default joinSwarm;
//# sourceMappingURL=joinSwarm.d.ts.map