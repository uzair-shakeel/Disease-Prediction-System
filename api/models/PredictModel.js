import { spawn } from 'child_process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const predictDisease = (symptoms) => {
  // Extract values from the symptoms object and convert them to an array
  const symptomsArray = Object.values(symptoms).map(parseFloat);

  return new Promise((resolve, reject) => {
    const pythonExecutable = 'python'; // Replace with the path to your Python executable if needed
    const pythonScriptPath = path.join(__dirname, '../predictHeartDisease.py');

    const pythonProcess = spawn(pythonExecutable, [
      pythonScriptPath,
      JSON.stringify(symptomsArray), // Pass the symptoms array as JSON string
    ]);

    let output = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error('Error executing Python script:', data.toString());
      reject(data.toString());
    });

    pythonProcess.on('close', (code) => {
      console.log('Python script exited with code:', code);
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(`Python script exited with code ${code}`);
      }
    });
  });
};

export default predictDisease;
