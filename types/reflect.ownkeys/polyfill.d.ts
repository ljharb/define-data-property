declare module 'reflect.ownkeys/polyfill' {
    import ownKeys = require('reflect.ownkeys/implementation');

    export = ownKeys;
}
