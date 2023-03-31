module.exports = {
  // Tells to use root folder as the Next project for nextron
  rendererSrcDir: './',

  // desktop main process' webpack config
  webpack: (config, {isServer}) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.target = 'electron-renderer'
    }

    return {
      ...config,
      entry: {
        ...config.entry,
        preload: './desktop/preload.ts',
      },
    }
  },
}
