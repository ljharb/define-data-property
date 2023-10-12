declare module 'reflect.ownkeys/implementation' {
    function ownKeys(target: object): (string | symbol)[];

    export = ownKeys;
}