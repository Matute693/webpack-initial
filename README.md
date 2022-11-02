
# Webpack proyect

Para configurar archivos y poder agregarlos al bundle de nuestra aplicacion a traves de webpack se necesitan algunos
plugins y dependencias. Se debe implementar una configuracion minima en nuestro archivo `webpack`.
Tenes dos archivos webpack en nuestra raiz del proyecto uno en ambiente productivo `webpack.prod.js` y otro para desarrollo `webpack.config.js`

# Dependecias de desarrollo

- Generar un archivo Html en nustra capeta dist
[html-loader](https://webpack.js.org/loaders/html-loader/)

- - Importar estilos globales de forma dinamica a nuestra carpeta dist (loader, style-loader)
[css-loader](https://v4.webpack.js.org/loaders/css-loader/)
[style-loader](https://v4.webpack.js.org/loaders/style-loader/)


- - Para importar imagenes y archivos estaticos 
[file-loader](https://v4.webpack.js.org/loaders/file-loader/)


# Plugins
- - Para generar el main.css
[CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)


- - Copy Plugin
[CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)


