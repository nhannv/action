import { AccessibleResource } from 'universal/utils/AtlassianClientManager';
declare const useAtlassianSites: (accessToken?: string | undefined) => {
    sites: AccessibleResource[];
    status: "error" | "loading" | "loaded" | null;
};
export default useAtlassianSites;
//# sourceMappingURL=useAtlassianSites.d.ts.map