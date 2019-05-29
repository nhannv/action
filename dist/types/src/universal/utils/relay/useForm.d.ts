import React from 'react';
import Legitity from '../../validation/Legitity';
interface FieldInputDict {
    [name: string]: {
        getDefault(): any;
        validate?(rawInput: any): Legitity;
    };
}
interface Field {
    value: string;
    error: string | undefined;
    dirty: boolean;
    resetValue: () => void;
}
interface FieldState {
    [name: string]: Field;
}
declare const useForm: (fieldInputDict: FieldInputDict, deps?: any[]) => {
    setDirtyField: (name?: string | undefined) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateField: (name?: string | undefined) => {} | undefined;
    fields: FieldState;
};
export default useForm;
//# sourceMappingURL=useForm.d.ts.map