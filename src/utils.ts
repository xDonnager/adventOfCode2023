import { open } from "node:fs/promises";
import path from "node:path";
import { Ok, Err, Result } from "ts-results";

const resolvePaths = (paths: Array<string>): string => {
  return path.resolve(...paths);
};

type readFileContentParams<T> = {
  paths: Array<string>;
  normalizeDataCallback: (data: string) => Array<T>;
};

type ReadFile<T> = (
  params: readFileContentParams<T>
) => Promise<Result<Array<T>, string>>;

export const readFileContent: ReadFile<string> = async ({
  paths,
  normalizeDataCallback,
}) => {
  let fileHandle;
  try {
    fileHandle = await open(resolvePaths(paths), "r");
    const puzzleData = await fileHandle.readFile({ encoding: "utf8" });
    return Ok(normalizeDataCallback(puzzleData));
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
