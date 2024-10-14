/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-unused-vars
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to compiled translation files
const esPath = path.join(__dirname, "dist", "es.js");
const itPath = path.join(__dirname, "dist", "it.js");
const ptPath = path.join(__dirname, "dist", "pt.js");
const frPath = path.join(__dirname, "dist", "fr.js");

// Function to read and parse the files
async function readTranslationFile(filePath) {
  const module = await import(filePath);
  return module.default;
}

// Function to find missing keys
function findMissingKeys(reference, target) {
  return Object.keys(reference).filter((key) => !(key in target));
}

async function checkTranslations() {
  // Read and parse the files
  const es = await readTranslationFile(esPath);
  const it = await readTranslationFile(itPath);
  const pt = await readTranslationFile(ptPath);
  const fr = await readTranslationFile(frPath);

  // Find missing keys for each language
  const missingInIt = findMissingKeys(es, it);
  const missingInPt = findMissingKeys(es, pt);
  const missingInFr = findMissingKeys(es, fr);

  // Output the results
  console.log("Missing keys in it.ts:", missingInIt);
  console.log("Missing keys in pt.ts:", missingInPt);
  console.log("Missing keys in fr.ts:", missingInFr);
}

checkTranslations();
