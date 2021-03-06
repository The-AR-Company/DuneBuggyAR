import { terser } from "rollup-plugin-terser";

export default [
    {
        input: 'shared/shared_web.js',
        output: [{
            file: 'web/src/js/shared.js',
            format: 'esm'
        }, {
            file: '8thWall/src/js/shared.js',
            format: 'esm'
        }]
    },
    {
        input: 'shared/shared_lensStudio.js',
        output: {
            file: 'lensStudio/Public/scripts/shared.js',
            format: 'umd'
        }
    },
    {
        input: 'shared/shared_sparkAR.js',
        output: [{
            name: 'sparkARShared',
            file: 'sparkAR/scripts/shared.js',
            format: 'iife'
        }],
        plugins: [
          terser({
            include: [/^.+\.min\.js$/, '*esm*'], 
            exclude: [ 'some*' ]
          })
        ]
    }
];