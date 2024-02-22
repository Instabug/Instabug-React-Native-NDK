import * as React from 'react';

import {StyleSheet, View, Button, Platform,Alert} from 'react-native';
import {NativeExampleCrashReporting} from "./native/NativeCrashReporting";
import { useEffect } from 'react';
import Instabug, {InvocationEvent, LogLevel, ReproStepsMode} from "instabug-reactnative";

export default function App() {
  useEffect(() => {
    Instabug.init({
      token: 'deb1910a7342814af4e4c9210c786f35',
      invocationEvents: [InvocationEvent.floatingButton],
      debugLogsLevel: LogLevel.verbose,
    });

    Instabug.setReproStepsConfig({
      all: ReproStepsMode.enabled,
    });


  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={async () => {
          if(Platform.OS==='android') {
            await NativeExampleCrashReporting.sendNDKCrash();
          }else{
            Alert.alert("It works on android only");

          }
        }}
        title="Send NDK Crash"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
