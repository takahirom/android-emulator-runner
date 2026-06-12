import * as core from '@actions/core';
import { killEmulator } from './emulator-manager';

async function run() {
  // only clean up when the main step left the emulator running
  if (core.getState('keepRunning') !== 'true') {
    return;
  }
  const port = parseInt(core.getState('emulatorPort'), 10);
  await killEmulator(port);
}

run();
