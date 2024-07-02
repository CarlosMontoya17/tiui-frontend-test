export interface ISimpleModal {
    text: string;
    title: string;
    cancel?: () => any;
    accept?: () => any;
}