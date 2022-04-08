// Required es una manera de llamar a las librerías.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    // Para especificar que está en modo de desarrollador
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        // Serie de directorios relativos y los vuelve absolutos.
        // __dirname vale config
        path: path.resolve(__dirname, "../build"),
        // El build js generado se llamará como abajo.
        filename: "main-[fullhash].js",
    },
    // Agregar el template en el HTML que queremos renderizar.
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
    })],
    // Declarar el servidor donde vamos a correr la app.
    devServer: {
        static: {
            // Dentro de la carpeta public, agarra los HTML.
            directory: path.resolve(__dirname, '../public'),
        },
        compress: true,
        port: 3000,
    },
    // Reglas de babel
    module: {
        rules: [
            {
                // Test es una expresión regular. Cuáles archivos
                // debe matchear para entender. Los archivos JavaScript.
                test: /\.(m?js)|(ts)|(jsx)|(tsx)$/,
                // No analiza s el node_modules o la bower_components)
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx", ".tsx"],
    }
};