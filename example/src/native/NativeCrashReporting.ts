import type { NativeModule } from 'react-native';

import { NativeExampleModules } from './NativePackage';

export interface CrashReportingExampleNativeModule extends NativeModule {
  sendNDKCrash(): Promise<void>;

}

export const NativeExampleCrashReporting = NativeExampleModules.CrashReportingExampleModule;
