import EventEmitter from 'eventemitter3';
import { Environment, FetchFunction, SubscribeFunction } from 'relay-runtime';
import Atmosphere from '../../Atmosphere';
import ClientGraphQLServer from './ClientGraphQLServer';
export default class LocalAtmosphere extends Environment {
    eventEmitter: EventEmitter<string | symbol>;
    clientGraphQLServer: ClientGraphQLServer;
    viewerId: string;
    constructor();
    registerQuery: Atmosphere['registerQuery'];
    fetchLocal: FetchFunction;
    subscribeLocal: SubscribeFunction;
}
//# sourceMappingURL=LocalAtmosphere.d.ts.map