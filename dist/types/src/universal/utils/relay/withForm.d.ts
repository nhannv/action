import React from 'react';
import Legitity from '../../validation/Legitity';
export interface WithFormProps {
    setDirtyField: (name?: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validateField(): {
        [name: string]: Legitity;
    };
    validateField(name: string): Legitity;
    fields: FieldState;
}
interface FieldInputDict {
    [name: string]: {
        getDefault(props: any): any;
        validate(rawInput: any, props: any): Legitity;
    };
}
interface Field {
    value: string;
    error: string | undefined;
    dirty: boolean;
}
interface FieldState {
    [name: string]: Field;
}
declare const withForm: (fields: FieldInputDict) => <P extends WithFormProps>(ComposedComponent: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Pick<P, Exclude<keyof P, "onChange" | "setDirtyField" | "validateField" | "fields">>> & React.RefAttributes<any>>;
export default withForm;
//# sourceMappingURL=withForm.d.ts.map