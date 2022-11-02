
# Webpack proyect

Para configurar archivos y poder agregarlos al bundle de nuestra a plicacion a traves de webpack se necesitan algunos
plugins y dependencias. Se debe implementar una configuracion minima en nuestro archivo `webpack.config.js`

- - Importar estilos globales de forma dinamica a nuestra carpeta dist (loader, style-loader)
- npm install --save-dev style-loader 
- npm install --save-dev style-loader


# plugins
- - Para generar el main.css
-  npm install --save-dev mini-css-extract-plugin

- - Copy Plugin
- npm install copy-webpack-plugin --save-dev


- - Para importar imagenes y archivos estaticos 
- npm install file-loader --save-dev