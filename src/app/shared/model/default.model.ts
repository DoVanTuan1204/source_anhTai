export interface BooleanSelection {
    displayExpr: string;
    valueExpr: boolean;
}

export interface DataTypeSelection {
    displayExpr: string;
    valueExpr: string;
}

export interface errorMessage {
    status?: number;
    title?: string;
    message?: string;
}