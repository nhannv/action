/// <reference types="react" />
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    invoiceId: string;
}> {
}
declare const InvoiceRoot: ({ match: { params: { invoiceId } } }: Props) => JSX.Element;
export default InvoiceRoot;
//# sourceMappingURL=InvoiceRoot.d.ts.map