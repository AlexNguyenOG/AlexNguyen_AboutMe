import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const pm2 = path.join(projectRoot, "node_modules", ".bin", "pm2");

function pm2List() {
  try {
    const output = execSync(`"${pm2}" jlist`, {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return JSON.parse(output);
  } catch {
    return [];
  }
}

function isOnline(processes, name) {
  return processes.some(
    (process) =>
      process.name === name && process.pm2_env?.status === "online",
  );
}

const processes = pm2List();

if (isOnline(processes, "get-to-know-me-dev")) {
  console.log("get-to-know-me dev server is already running under PM2.");
  console.log("Open http://localhost:3010");
  process.exit(0);
}

console.log("Starting get-to-know-me under PM2…");
execSync(`"${pm2}" start ecosystem.config.cjs`, {
  cwd: projectRoot,
  stdio: "inherit",
});

execSync(`"${pm2}" save --force`, {
  cwd: projectRoot,
  stdio: "inherit",
});

console.log("\nDev server: http://localhost:3010");
console.log("Commands: dev:daemon:status | dev:daemon:logs | dev:daemon:stop");
