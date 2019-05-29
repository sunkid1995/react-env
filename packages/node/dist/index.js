'use strict';

const shell = require("shelljs");

function translateArch() {
  switch (process.arch) {
    default:
    case "x64":
      return "amd64";
    case "ia32":
      return "386";
    case "arm":
      return "arm";
  }
}

function getBinaryPath() {
  const bin = `react-env_${process.platform}-${translateArch()}`;
  return `./bin/${bin}`;
}

function command(cmd) {
  shell.echo(cmd);
  if (shell.exec(cmd).code !== 0) {
    shell.exit(1);
  }
}

command(getBinaryPath());