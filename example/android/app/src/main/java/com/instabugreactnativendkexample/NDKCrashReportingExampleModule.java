package com.instabugreactnativendkexample;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.instabugreactnativendkexample.nativeLibs.CppNativeLib;

import javax.annotation.Nonnull;

public class NDKCrashReportingExampleModule extends ReactContextBaseJavaModule {

    public NDKCrashReportingExampleModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "CrashReportingExampleModule";
    }


    ////////////////////// NDK SECTION //////////////////////////
    @ReactMethod
    public void sendNDKCrash() {
        CppNativeLib.crashNDK();
    }


}
