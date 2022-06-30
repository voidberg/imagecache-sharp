import sharp from "sharp";
export declare type ActionsHash = {
    [name: string]: Function;
};
export declare type Plugin = {
    name: string;
    description: string;
    actions: ActionsHash;
};
export declare type Action = {
    action: string;
    config?: any;
};
export declare type Preset = {
    presetName: string;
    actions: Action[];
};
export declare class ImageCache {
    private presets;
    private actions;
    private plugins;
    /**
     * Creates a new instance of ImageCache
     * with a list of presets.
     *
     * @param presets A list of presets
     * @returns The new ImageCache instance
     */
    constructor(_presets: Preset[]);
    /**
     * Returns a list of the available presets
     *
     * @returns The list of available presets
     */
    presetList(): Preset[];
    /**
     * Returns a list of the available plugins
     *
     * @returns The list of available plugins
     */
    pluginList(): Plugin[];
    /**
     * Returns a list of the available actions
     *
     * @returns The list of available actions
     */
    actionList(): string[];
    /**
     * Registers an action from a plugin
     *
     */
    registerAction(name: string, callback: Function): void;
    /**
     * Gets an action
     *
     */
    getAction(name: string): Function;
    /**
     * Renders an image using the supplied preset.
     *
     * @param image The image to be rendered
     * @param presetName The preset to use
     */
    render(image: string, presetName: string): Promise<sharp.Sharp>;
}
