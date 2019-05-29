/// <reference types="react" />
import { ServiceDropdownOption } from 'universal/components/ServiceDropdown';
interface Props {
    isLoaded: boolean;
    fetchOptions: () => void;
    dropdownText: string;
    handleItemClick: (option: ServiceDropdownOption) => () => void;
    options: Array<ServiceDropdownOption>;
}
declare const ServiceDropdownInput: (props: Props) => JSX.Element;
export default ServiceDropdownInput;
//# sourceMappingURL=ServiceDropdownInput.d.ts.map