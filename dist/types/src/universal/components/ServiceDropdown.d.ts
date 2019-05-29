/// <reference types="react" />
import { MenuProps } from 'universal/hooks/useMenu';
export interface ServiceDropdownOption {
    id: string;
    label: string;
}
interface Props {
    menuProps: MenuProps;
    handleItemClick: (option: ServiceDropdownOption) => () => void;
    isLoaded: boolean;
    options: Array<ServiceDropdownOption>;
}
declare const ServiceDropdown: (props: Props) => JSX.Element;
export default ServiceDropdown;
//# sourceMappingURL=ServiceDropdown.d.ts.map