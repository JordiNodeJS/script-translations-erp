import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to compiled translation files
const distDir = path.join(__dirname, "dist");
const outputDir = path.join(__dirname, "output");
const esPath = path.join(distDir, "es.js");
const enPath = path.join(distDir, "en.js");
const ptPath = path.join(distDir, "pt.js");
const itPath = path.join(distDir, "it.js");
const frPath = path.join(distDir, "fr.js");

// Function to read and parse the files
async function readTranslationFile(filePath) {
  const module = await import(filePath);
  return module.default;
}

// Function to read the original TypeScript file with comments
async function readOriginalFile(filePath) {
  const content = await fs.promises.readFile(filePath, "utf-8");
  return content;
}

// Function to write the updated content to the file
async function writeTranslationFile(filePath, content) {
  await fs.promises.writeFile(filePath, content, "utf-8");
}

// Function to reorder and add missing keys
function reorderAndAddMissingKeys(reference, target) {
  const orderedTarget = {};
  for (const key of Object.keys(reference)) {
    orderedTarget[key] = target[key] || "";
  }
  return orderedTarget;
}

async function updateTranslations() {
  // Read and parse the files
  const es = await readTranslationFile(esPath);
  const en = await readTranslationFile(enPath);
  const pt = await readTranslationFile(ptPath);
  const it = await readTranslationFile(itPath);
  const fr = await readTranslationFile(frPath);

  // Read the original TypeScript file with comments
  const esComments = await readOriginalFile(
    path.join(__dirname, "locales", "es.ts")
  );

  // Reorder and add missing keys
  const updatedEn = reorderAndAddMissingKeys(es, en);
  const updatedPt = reorderAndAddMissingKeys(es, pt);
  const updatedIt = reorderAndAddMissingKeys(es, it);
  const updatedFr = reorderAndAddMissingKeys(es, fr);

  // Convert the updated content to a string
  const enContent = `/* eslint-disable */
export default ${JSON.stringify(updatedEn, null, 2)};
`;
  const ptContent = `/* eslint-disable */
export default ${JSON.stringify(updatedPt, null, 2)};
`;
  const itContent = `/* eslint-disable */
export default ${JSON.stringify(updatedIt, null, 2)};
`;
  const frContent = `/* eslint-disable */
export default ${JSON.stringify(updatedFr, null, 2)};
`;

  // Ensure output directory exists
  await fs.promises.mkdir(outputDir, { recursive: true });

  // Write the updated content to the files in the output directory with .ts extension
  await writeTranslationFile(path.join(outputDir, "en.ts"), enContent);
  await writeTranslationFile(path.join(outputDir, "pt.ts"), ptContent);
  await writeTranslationFile(path.join(outputDir, "it.ts"), itContent);
  await writeTranslationFile(path.join(outputDir, "fr.ts"), frContent);

  console.log(
    "Translation files updated and saved to output directory successfully."
  );
}

updateTranslations();
