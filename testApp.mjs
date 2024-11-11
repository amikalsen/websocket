import { exec } from "child_process";

console.log("Starting the server...");

// start the server process
const serverProcess = exec("node server.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Server start error: ${error.message}`);
    return;
  }
  if (stderr) console.error(`Server stderr: ${stderr}`);
  console.log(`Server stdout: ${stdout}`);
});

// define variables for browser processes
let firstBrowser;
let secondBrowser;

// open the first browser window
firstBrowser = exec("start firefox -private-window http://localhost:3000", { shell: true });
console.log("First browser window opened. Waiting 2 seconds for the second...");

// open the second browser window after a delay
setTimeout(() => {
  secondBrowser = exec("start firefox -private-window http://localhost:3000", { shell: true });
  console.log("Second browser window opened.");
}, 2000);

setTimeout(() => {
  console.log("Closing server and browser windows...");

  // kill the server by stopping all node.exe processes (adjust if multiple Node processes are an issue)
  exec("taskkill /IM node.exe /F", (error) => {
    if (error) {
      console.error(`Error closing server: ${error.message}`);
    } else {
      console.log("Server closed.");
    }
  });

  // close Firefox browser on Windows
  exec("taskkill /IM firefox.exe /F", (error) => {
    if (error) {
      console.error(`Error closing browser windows: ${error.message}`);
    } else {
      console.log("Browser windows closed.");
    }
  });
}, 40000); // adjust delay as needed for all messages to be sent