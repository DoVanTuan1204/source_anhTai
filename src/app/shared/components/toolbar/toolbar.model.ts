export class ToolbarOptions {
    stylingMode?: string;
    type?: string;
    text?: string;
    icon?: string;
    hint?: string;
    onClick?: any;
    onItemClick?: any;
    dataSource?: any;
    valueExpr?: string;
    keyExpr?: string;
    displayExpr?: string;
    placeholder?: string;
    onValueChanged?: any;
    width?: any;
    value?: any;
    elementAttr?: { id: string; class?: string; };
    items?: any[];
    selectedItemKeys?: any[];
}

export class ToolbarItem {
    key: string;
    text?: string;
    location: string; // 'before' | 'after' | 'center'
    locateInMenu?: string; // 'always' | 'never' | 'auto'
    widget?: string;
    options?: ToolbarOptions;
    disabled?: boolean;
    visible?: boolean;
    template?: any;
}

export interface Toolbar {
    toolbarItems?: ToolbarItem[];
    contentType?: string;
    contentTypeUnArchive?: string;
    disabled?: string;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    borderTopRadiusCorners?: number;
    borderBottomRadiusCorners?: number;
    jobDateLocation?: string;
    jobDateDefaultPeriodCode?: string;
}

