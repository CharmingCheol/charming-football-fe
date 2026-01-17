type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type Builder<T> = {
    [k in keyof T]: (arg: DeepPartial<T[k]>) => Builder<T>;
} & { build(): T };

export default function Builder<T extends object>(): Builder<T> {
    const built: Record<string | symbol, unknown> = {};
    const builder: Builder<T> = new Proxy({} as Builder<T>, {
        get(_, prop) {
            if (prop === "build") {
                return () => built as T;
            }
            return (arg: DeepPartial<T[keyof T]>) => {
                built[prop] = arg;
                return builder;
            };
        },
    });
    return builder;
}
