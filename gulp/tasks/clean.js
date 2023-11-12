// clean.js
import { config } from "../settings/config";

export async function cleanup() {
  // Динамический импорт
  const del = await import("del");

  // Удаляем файлы
  const deletedFilePaths = await del(["temp/*.js", "!temp/unicorn.js"]);

  // Удаляем директории
  const deletedDirectoryPaths = await del(["temp", "public"]);

  // Логгируем удаленные файлы и директории
  console.log("Deleted files:\n", deletedFilePaths.join("\n"));
  console.log("\n\n");
  console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"));
}

export function getDestPath() {
  return config.destPath;
}
