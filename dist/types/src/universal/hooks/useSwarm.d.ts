export interface StreamUI {
    hasVideo: boolean;
    hasAudio: boolean;
    isVideoBlocked: boolean;
    isAudioBlocked: boolean;
}
export interface StreamUserDict {
    [userId: string]: StreamUI;
}
export interface StreamDict {
    cam: StreamUserDict;
    screen: StreamUserDict;
}
declare const useSwarm: (roomId: any) => import("../utils/swarm/reducerSwarm").SwarmState;
export default useSwarm;
//# sourceMappingURL=useSwarm.d.ts.map