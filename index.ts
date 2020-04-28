import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run() {
  try {
    if (process.platform === 'win32'){
      tc.extractZip("1.zip", "test1")
      tc.extract7z("1.7z", "test2")
    }
    else {
      tc.extractZip("1.zip", "test1")
      tc.extract7z("1.7z", "test2")
      tc.extractTar("1.tar", "test3")
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()