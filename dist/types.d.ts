export declare type Plugin = {
    name: string;
    description: string;
    attach: (any: any) => void;
};
export declare type Action = {
    action: string;
    config?: any;
};
export declare type Preset = {
    presetName: string;
    actions: Action[];
};
