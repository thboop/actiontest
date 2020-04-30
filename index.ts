import * as core from '@actions/core';

async function run() {
  try {
    core.setOutput("foo", "bar")
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()