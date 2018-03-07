/**
 * Created by nullice on 2017/4/5.
 */
import babel from 'rollup-plugin-babel';
export default [
    {
        input: 'src/index.js',
        output: {
            file:"./dist/Richang.js",
            format: 'umd',
            name:"Richang",
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers']
            })
        ]

    },
    {
        input: 'src/index.js',
        output: {
            file:"./dist/RichangEs.js",
            format: 'es',
            name:"Richang",
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers']
            })
        ]

    },
    {
        input: 'src/index.node.js',
        output: {
            file:"./dist/RichangNode.js",
            format: 'cjs',
            name:"Richang",
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['external-helpers']
            })
        ]

    }
];
