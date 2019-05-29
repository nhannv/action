import { AtmosphereEvents } from 'universal/Atmosphere';
declare const useAtmosphereListener: <T extends "newSubscriptionClient" | "addToast" | "removeToast" | "endDraggingReflection" | "focusAgendaInput" | "inviteToTeam" | "meetingSidebarCollapsed" | "removeGitHubRepo", V extends AtmosphereEvents[T]>(eventName: T, callback: V extends (...args: any) => any ? V : () => V) => void;
export default useAtmosphereListener;
//# sourceMappingURL=useAtmosphereListener.d.ts.map