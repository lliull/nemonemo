module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  devServer: {  
    proxy: {
        '/': {
            target: 'http://localhost:8080',
            changeOrigin: true,

        }
    }
  }
};
