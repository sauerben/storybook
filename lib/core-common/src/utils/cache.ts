import Cache from 'file-system-cache';
import { resolvePathInStorybookCache } from './resolve-path-in-sb-cache';

interface Options {
  basePath?: string;
  ns?: string | string[];
  extension?: string;
}
export class FileSystemCache {
  // eslint-disable-next-line no-useless-constructor
  constructor(options: Options) {
    //
  }

  path(key: string): string {
    return key;
  }

  async fileExists(key: string): Promise<boolean> {
    return true;
  }

  async ensureBasePath(): Promise<void> {}

  async get(key: string, defaultValue?: any): Promise<any | typeof defaultValue> {}

  getSync(key: string, defaultValue?: any): any | typeof defaultValue {}

  async set(key: string, value: any): Promise<{ path: string }> {
    return { path: key };
  }

  setSync(key: string, value: any): this {
    return this;
  }

  async remove(key: string): Promise<void> {}

  async clear(): Promise<void> {}

  async save(): Promise<{ paths: string[] }> {
    return { paths: [] };
  }

  async load(): Promise<{ files: Array<{ path: string; value: any }> }> {
    return { files: [] };
  }
}

export const cache = Cache({
  basePath: resolvePathInStorybookCache('dev-server'),
  ns: 'storybook', // Optional. A grouping namespace for items.
}) as FileSystemCache;
