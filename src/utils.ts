import { open } from "node:fs/promises";
import path from "node:path";
import { Ok, Err, Result } from "ts-results";

const resolvePaths = (paths: Array<string>): string => {
  return path.resolve(...paths);
};

type readFileContentParams<T> = {
  paths: Array<string>;
  normalizeDataCallback: (data: string) => T;
};

type ReadFile<T> = (
  params: readFileContentParams<T>
) => Promise<Result<T, string>>;

export const splitcontentByNewLine = (data: string): Array<string> => data.split("\n");
export const convertStringsToNumbers = (data: Array<string>):Array<number> => data.map((el)=> Number(el));

export const readFileContentAndNormalizeData: ReadFile<Array<string>> = async ({
  paths,
  normalizeDataCallback,
}) => {
  let fileHandle;
  try {
    fileHandle = await open(resolvePaths(paths), "r");
    const puzzleData = await fileHandle.readFile({ encoding: "utf8" });
    return Ok(normalizeDataCallback(puzzleData))
  } catch (e) {
    console.log(e);
    return new Err("Error reading file content");
  } finally {
    // Ensure fileHandle is closed even if an error occurs
    if (fileHandle) {
      await fileHandle.close();
    }
  }
};

export const readPlainTextInput = async ({
  paths,
}:{paths: Array<string>;}): Promise<Result<string,string>> => {
  let fileHandle;
  try {
    fileHandle = await open(resolvePaths(paths), "r");
    const puzzleData = await fileHandle.readFile({ encoding: "utf8" });
    return Ok(puzzleData);
  } catch (e) {
    console.log(e);
    return new Err("Error getting plain text");
  } finally {
    // Ensure fileHandle is closed even if an error occurs
    if (fileHandle) {
      await fileHandle.close();
    }
  }
};

