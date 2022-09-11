export interface Item {
    label: string;
    icon: JSX.Element;
    active?: boolean;
}

export interface ModalPopup {
    status: string;
    payload?: any;
}