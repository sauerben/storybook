declare module 'global';
declare module '@storybook/semver';
declare module 'unfetch/dist/unfetch';
declare module 'lazy-universal-dotenv';
declare module 'pnp-webpack-plugin';
declare module '@storybook/theming/paths';
declare module '@storybook/ui/paths';
declare module 'better-opn';
declare module 'open';
declare module 'x-default-browser';
declare module '@storybook/ui';

declare module 'file-system-cache' {
  export interface Options {
    basePath?: string;
    ns?: string | string[];
    extension?: string;
  }

  export class FileSystemCache {
    constructor(options: Options);
    path(key: string): string;
    fileExists(key: string): Promise<boolean>;
    ensureBasePath(): Promise<void>;
    get(key: string, defaultValue?: any): Promise<any | typeof defaultValue>;
    getSync(key: string, defaultValue?: any): any | typeof defaultValue;
    set(key: string, value: any): Promise<{ path: string }>;
    setSync(key: string, value: any): this;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
    save(): Promise<{ paths: string[] }>;
    load(): Promise<{ files: Array<{ path: string; value: any }> }>;
  }

  export default function create(options: Options): FileSystemCache;
}

declare module 'ansi-to-html';
declare module '@storybook/preview-web/dist/cjs/PreviewWeb.mockdata';

declare class AnsiToHtml {
  constructor(options: { escapeHtml: boolean });

  toHtml: (ansi: string) => string;
}
