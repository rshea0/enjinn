import { isDev } from '@/utils';
import { autoUpdater, UpdateCheckResult } from 'electron-updater';
import path from 'path';

export function init() {
  autoUpdater.autoDownload = false;

  if (isDev()) {
    autoUpdater.updateConfigPath = path.resolve(
      __dirname,
      '..',
      'dev-app-update.yml',
    );
  }
}

export async function checkForUpdates(): Promise<
  UpdateCheckResult | undefined
> {
  try {
    return await autoUpdater.checkForUpdates();
  } catch (e) {
    console.error(e);
    return undefined;
  }
}