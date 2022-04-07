import axios from "axios";
import { writeFile } from "fs/promises";

/**
 *
 * Link sharing must be turned on so anyone with the link
 * can view the Google Sheet
 *
 * You can change it later
 *
 */

const writeData = async (
  spreadsheetId: string,
  tab: string,
  filename: string
): Promise<void> => {
  const url = `https://opensheet.elk.sh/${spreadsheetId}/${tab}`;

  const { data, status } = await axios.get(url);

  if (status !== 200) {
    throw new Error(`Failed to fetch ${url}`);
  }

  try {
    const json = JSON.stringify(data);
    writeFile(filename, json, "utf8");
  } catch (error) {
    throw error;
  }
};

const spreadsheetId = "";
const tab = "";
const filename = "";

writeData(spreadsheetId, tab, filename).catch((err) => {
  console.log(err);
});
