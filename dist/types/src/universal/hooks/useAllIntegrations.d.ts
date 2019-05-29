import Atmosphere from 'universal/Atmosphere';
declare const useAllIntegrations: (atmosphere: Atmosphere, query: string, suggestedItems: readonly any[], hasMore: boolean, teamId: string, userId: string) => {
    allItems: any[];
    status: "error" | "loading" | "loaded" | null;
};
export default useAllIntegrations;
//# sourceMappingURL=useAllIntegrations.d.ts.map