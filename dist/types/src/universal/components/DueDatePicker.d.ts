import React from 'react';
import 'universal/styles/daypicker.css';
import { MenuProps } from 'universal/hooks/useMenu';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { DueDatePicker_task } from '__generated__/DueDatePicker_task.graphql';
interface Props extends WithAtmosphereProps, WithMutationProps {
    menuProps: MenuProps;
    task: DueDatePicker_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "task" | "menuProps"> & React.RefAttributes<any>, "ref" | "key" | "task" | "menuProps">, "ref" | "key" | "task" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=DueDatePicker.d.ts.map