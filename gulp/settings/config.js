const srcPath = "src";
const buildPath = "build";
const destPath = "docs";
const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/fonts`,
    images: `${srcPath}/images`,
    files: `${srcPath}/files`,
    iconsMulti: `${srcPath}/icons/multi`,
    pug: `${srcPath}/pug`,
    html: `${srcPath}/html`,
  },
  build: {
    root: buildPath,
    html: buildPath,
    css: `${buildPath}/css`,
    js: `${buildPath}/js`,
    fonts: `${buildPath}/fonts`,
    images: `${buildPath}/images`,
    files: `${buildPath}/files`,
  },
  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
    files: `${destPath}/files`,
  },
  setEnv() {
    this.isProd = process.argv.includes("--prod");
    this.isDev = !this.isProd;
  },
};
export default config;
