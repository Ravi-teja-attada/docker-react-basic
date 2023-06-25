import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'MyLibrary'
  },
  plugins: [
    // other plugins here
    terser({
      format: {
        comments: false
      }
    })
  ]
};