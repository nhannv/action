declare global {
    interface Navigator {
        permissions: {
            query: (queryObj: {
                name: string;
            }) => Promise<{
                state: PushPermissionState;
                onchange: () => void | null;
            }>;
        };
    }
}
declare const _default: any;
export default _default;
//# sourceMappingURL=VideoControls.d.ts.map