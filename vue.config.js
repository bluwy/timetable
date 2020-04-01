module.exports = {
  pwa: {
    name: 'Timetable',
    themeColor: '#207DFF',
    msTileColor: '#EFEFEF',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'img/icons/icon-32x32.png',
      favicon16: 'img/icons/icon-16x16.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      maskIcon: 'img/icons/icon.svg',
      msTileImage: 'img/icons/icon-144x144.png'
    },
    manifestOptions: {
      background_color: '#EFEFEF',
      icons: [
        {
          src: './img/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: './img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
}