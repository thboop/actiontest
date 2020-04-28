import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run() {
  try {
    if (process.platform === 'win32'){
      const node12Path1 = await tc.downloadTool('https://nodejs.org/dist/v12.7.0/node-v12.7.0-win-x64.7z');
      await tc.extract7z(node12Path1, 'test2');
    }
    else {
      const node12Path = await tc.downloadTool('https://nodejs.org/dist/v12.7.0/node-v12.7.0-linux-x64.tar.gz');
      await tc.extractTar(node12Path, 'test1');
      const node12Path1 = await tc.downloadTool('https://nodejs.org/dist/v12.7.0/node-v12.7.0-win-x64.zip');
      await tc.extractZip(node12Path1, 'test2');
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()