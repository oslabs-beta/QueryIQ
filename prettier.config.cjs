/******************************************************************************* 
Per T3-Axiom #3, we treat typesafety as a first class citizen. Unfortunately, 
not all frameworks and plugins support TypeScript which means some of the 
configuration files have to be .js files.

We try to emphasize that these files are JavaScript for a reason, by explicitly 
declaring each file's type (cjs or mjs) depending on what's supported by the 
library it is used by. Also, all the js files in this project are still 
typechecked using a checkJs option in the compiler (tsconfig).

==> Do not convert this file to TypeScript. It will break the build.

*******************************************************************************/

/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
