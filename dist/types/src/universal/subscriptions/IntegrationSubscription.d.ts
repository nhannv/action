declare const IntegrationSubscription: (atmosphere: any, _queryVariables: any, subParams: any) => {
    subscription: import("react-relay").GraphQLTaggedNode;
    variables: {
        teamId: any;
    };
    updater: (store: any) => void;
    onNext: ({ integrationSubscription }: {
        integrationSubscription: any;
    }) => void;
};
export default IntegrationSubscription;
//# sourceMappingURL=IntegrationSubscription.d.ts.map