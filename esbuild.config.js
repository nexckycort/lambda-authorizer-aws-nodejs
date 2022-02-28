const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  minify: true,
  platform: "node",
  target: "node16",
  external: ["./node_modules/*", "dotenv"],
});
