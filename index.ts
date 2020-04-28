import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run() {
  try {
    if (process.platform === 'win32'){
      tc.extractZip("test", "test1")
      tc.extract7z("test", "test2")
    }
    else {
      tc.extractZip("test", "test1")
      tc.extractTar("test", "test3")
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()