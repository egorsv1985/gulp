import gulp from "gulp";
import clean from "./gulp/tasks/clean";
import config from "./gulp/settings/config";

config.setEnv();
export const build = gulp.series(clean);
export const watch = gulp.series(build);
