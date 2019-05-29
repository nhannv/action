/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { MenuPosition } from 'universal/hooks/useCoords';
interface Options {
    delay?: number;
}
declare const useTooltip: (preferredMenuPosition: MenuPosition, options?: Options) => {
    openTooltip: () => void;
    closeTooltip: () => void;
    originRef: import("react").MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;
    tooltipPortal: (reactEl: any) => import("react").ReactPortal | null;
};
export default useTooltip;
//# sourceMappingURL=useTooltip.d.ts.map