import sharp from "sharp";
import _plugins from "./plugins/index";

export type ActionsHash = {
  [name: string]: Function;
};

export type Plugin = {
  name: string;
  description: string;
  actions: ActionsHash;
};

export type Action = {
  action: string;
  config?: any;
};

export type Preset = {
  presetName: string;
  actions: Action[];
};

export class ImageCache {
  private presets: Preset[];
  private actions: object;
  private plugins: Plugin[];

  /**
   * Creates a new instance of ImageCache
   * with a list of presets.
   *
   * @param presets A list of presets
   * @returns The new ImageCache instance
   */
  constructor(_presets: Preset[]) {
    this.presets = _presets;
    this.plugins = _plugins;
    this.actions = {};

    _plugins.forEach((plugin) => {
      Object.keys(plugin.actions).forEach((name) =>
        this.registerAction(name, plugin.actions[name])
      );
    }, this);
  }

  /**
   * Returns a list of the available presets
   *
   * @returns The list of available presets
   */
  public presetList(): Preset[] {
    return this.presets;
  }

  /**
   * Returns a list of the available plugins
   *
   * @returns The list of available plugins
   */
  pluginList(): Plugin[] {
    return this.plugins;
  }

  /**
   * Returns a list of the available actions
   *
   * @returns The list of available actions
   */
  actionList(): string[] {
    return Object.keys(this.actions);
  }

  /**
   * Registers an action from a plugin
   *
   */
  registerAction(name: string, callback: Function) {
    this.actions[name] = callback;
  }

  /**
   * Gets an action
   *
   */
  getAction(name: string): Function {
    return this.actions[name];
  }

  /**
   * Renders an image using the supplied preset.
   *
   * @param image The image to be rendered
   * @param presetName The preset to use
   */
  async render(image: string, presetName: string): Promise<sharp.Sharp> {
    let sharpInstance: sharp.Sharp;
    let metadata: Object;

    return new Promise<sharp.Sharp>(async (resolve, reject): Promise<void> => {
      const preset = this.presets.find(
        (preset) => preset.presetName === presetName
      );
      if (!preset) {
        return reject(new Error(`Preset ${presetName} could not be found.`));
      }

      try {
        sharpInstance = sharp(image);
      } catch (sharpErr) {
        return reject(sharpErr);
      }

      metadata = await sharpInstance.metadata();

      try {
        for (const action of preset.actions) {
          const actionCallback = this.getAction(action.action);

          if (!actionCallback) {
            throw new Error(
              `Action ${action.action} for preset ${presetName} not found in loaded plugins.`
            );
          }

          sharpInstance = await actionCallback(
            this,
            sharpInstance,
            metadata,
            action.config || {}
          );
        }
      } catch (e) {
        return reject(e);
      }

      resolve(sharpInstance);
    });
  }
}
