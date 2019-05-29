import { PayloadError } from 'relay-runtime';
interface MutationServerError {
    message: string;
    path: Array<string>;
}
declare const useMutationProps: () => {
    submitting: boolean;
    submitMutation: () => void;
    error: {
        message: string;
    } | undefined;
    onError: (error: Error | MutationServerError) => void;
    onCompleted: (res: {
        [operationNames: string]: {
            error?: MutationServerError | undefined;
        };
    } | null, errors?: PayloadError[] | null | undefined) => void;
};
export default useMutationProps;
//# sourceMappingURL=useMutationProps.d.ts.map