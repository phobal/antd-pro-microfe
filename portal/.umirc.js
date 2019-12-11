export default {
  proxy: {
    '/api-app1': {
      target: 'http://localhost:8011',
      changeOrigin: true
    },
    '/api': {
      target: 'https://easy-mock.bookset.io/mock/5dc1032e9e606017b5d2c92d',
      changeOrigin: true,
      pathRewrite: (path) => path.replace(/^\/api/, '')
    }
  },
  plugins: [
    [
      '@umijs/plugin-qiankun',
      {
        master: {
          defer: true,
          jsSandbox: true,
          prefetch: true
        }
      }
    ],
    [
      'umi-plugin-react',
      {
        title: 'qiankun-demo',
        antd: true,
        dva: {
          immer: true,
          hmr: true
        },
        dynamicImport: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/
          ]
        }
      }
    ]
  ]
}
