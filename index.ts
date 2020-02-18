import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const ms: string = core.getInput('milliseconds');
    core.debug(`Waiting ${ms} milliseconds ...`);
    const context = github.context;
    core.info(context.sha);
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()