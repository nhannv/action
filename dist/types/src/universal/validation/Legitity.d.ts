declare class Legitity {
    value: any;
    error: undefined | string;
    constructor(value: string);
    boolean(msg?: string): this;
    float(msg?: string): this;
    int(msg?: string): this;
    matches(regex: RegExp, msg?: string): this;
    max(len: number, msg?: string): this;
    min(len: number, msg?: string): this;
    required(msg?: string): this;
    trim(): this;
    normalize(fn: (value: any) => boolean, msg: string): this;
    test(check: (value: any) => string | undefined): this;
}
export default Legitity;
//# sourceMappingURL=Legitity.d.ts.map