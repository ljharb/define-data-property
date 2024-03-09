
declare function defineDataProperty<T extends Record<PropertyKey, unknown>>(
    obj: T,
    property: keyof T,
    value: T[keyof T],
    nonEnumerable?: boolean | null,
    nonWritable?: boolean | null,
    nonConfigurable?: boolean | null,
    loose?: boolean
): void;

export = defineDataProperty;