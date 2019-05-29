import React, { Component, ReactNode } from 'react';
import Atmosphere from 'universal/Atmosphere';
import TLocalAtmosphere from '../../modules/demo/LocalAtmosphere';
export declare const AtmosphereContext: React.Context<Atmosphere | TLocalAtmosphere | undefined>;
interface Props {
    children: ReactNode;
    isDemo?: boolean;
}
declare class AtmosphereProvider extends Component<Props> {
    atmosphere?: Atmosphere | TLocalAtmosphere;
    constructor(props: any);
    loadDemo(): Promise<void>;
    render(): JSX.Element | null;
}
export default AtmosphereProvider;
//# sourceMappingURL=AtmosphereProvider.d.ts.map