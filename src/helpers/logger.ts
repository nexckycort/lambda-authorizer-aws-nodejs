export const Logger = {
  info: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.info(arg);
    });
  },
  error: (msg: string, e: Error | unknown | string = ""): void => {
    console.error(`⚠️  ${msg} ⚠️ `, e);
  },
};
