export interface Item {
    label: string;
    icon: JSX.Element;
    active?: boolean;
}

export interface ModalPopup {
    status: string;
    payload?: any;
}

export interface FavoriteLocationType {
    id: number;
    title: string;
    image: string;
    link: string;
}