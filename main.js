import translations from "./locales/fr";
import csvData from "./cvs/fr";

/**
 * Converts an object to a CSV string where each key-value pair is separated by "::" and each pair is on a new line.
 *
 * @param {Object} obj - The object to be converted to CSV format.
 * @returns {string} A CSV string representation of the object.
 */
const convertToCSV = (obj) => {
  const rows = Object.entries(obj).map(([key, value]) => `${key}::${value}`);
  const sanitizedRows = rows.map((row) => row.replace(/\n/g, " "));
  return sanitizedRows.join("\n");
};

/**
 * Converts a CSV string into an array of key-value pairs and logs the result.
 * Then, formats the key-value pairs into a JavaScript object notation string and logs it.
 *
 * @param {string} csv - The CSV string to be converted. Each row should contain a key and a value separated by a comma.
 *
 * @example
 * const csvData = "key1,value1\nkey2,value2";
 * printToObjs(csvData);
 *  Logs:
 *  [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]
 *  {
 *    key1: 'value1',
 *    key2: 'value2'
 *  }
 */
const printToObjs = (csv) => {
  const rows = csv.split("\n");
  const arr = [];
  rows.forEach((row) => {
    const [key, value] = row.split(",");
    if (key && value) {
      arr.push([key.trim(), value.trim().replace(/'/g, "´")]);
    }
  });
  let result = "{\n";
  arr.forEach(([key, value], index) => {
    result += ` '${key}': '${value}'`;
    if (index < arr.length - 1) {
      result += ",\n";
    }
  });
  result += "\n}";

  console.log(result);
};

console.log(convertToCSV(translations));

// console.log(printToObjs(csvData));
