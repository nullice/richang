/**
 * Created by nullice on 2017/4/5.
 */

import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
export default [{
    input: 'src/index.js',
    output: {

        file:"./dist/Richang.min.js",
        format: 'umd',
        name:"Richang",
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        })
        , uglify()
    ]

},
    {
        input: 'src/index.node.js',
        output: {
            file:"./dist/RichangNode.min.js",
            format: 'cjs',
            name:"Richang",
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers']
            }), uglify()
        ]

    }];


import ""
