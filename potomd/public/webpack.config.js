
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(jpg|png|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               limit: 8192,
//               outputPath: 'images'
//             }
//           }
//         ]
//       },
//       {
//         test: /\.less$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader' },
//           { loader: 'less-loader' }
//         ]
//       },
//     ]
//   }
// };
const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //打包图片
            {
                test: /\.(gif|jpeg|jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images'
                        }
                    }
                ]
            },
            //打包less
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
            ]
            }

        ]
    }
}