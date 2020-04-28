import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run() {
  try {
    if (process.platform === 'win32'){
      tc.extractZip("test.zip", "test1")
      tc.extract7z("test.7z", "test2")
    }
    else {
      tc.extractZip("test.zip", "test1")
      tc.extract7z("test.7z", "test2")
      tc.extractTar("test.tar", "test3")
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()