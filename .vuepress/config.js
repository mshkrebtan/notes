module.exports = {
  title: 'Maxie’s Notes',
  description: 'Maksim Shkrebtan’s personal documentation website',

  dest: 'docs',
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        lastUpdated: true,
        sidebarDepth: '6',
        sidebar: [
          {
            title: 'Audio',
            children: [
              '/audio/bit-perfect-hi-res-audio-player-on-linux-with-mpd',
              '/audio/edit-encoded-audio-with-ffmpeg-and-audacity',
              '/audio/downsample-audio-with-sox',
              '/audio/dsd-to-pcm-conversion-with-ffmpeg',
            ]
          },
          {
            title: 'Kindle',
            children: [
              '/kindle/best-way-to-convert-fb2-to-mobi',
              '/kindle/convert-epub-to-mobi-with-kindlegen'
            ]
          },
          {
            title: 'Privacy',
            children: [
              '/privacy/spoof-your-browser-platform'
            ]
          },
          {
            title: 'Proxy & VPN',
            children: [
              '/proxy-and-vpn/configure-socks-proxy-on-ios-with-pac',
              '/proxy-and-vpn/simple-dante-configuration'
            ]
          },
          {
            title: 'Linux',
            children: [
              '/linux/change-intel-i915-s-pwm-frequency-on-boot'
            ]
          },
          {
            title: 'macOS',
            children: [
              '/macos/mount-ntfs-volume-for-writing',
              '/macos/temporarily-prevent-mac-from-sleeping',
              '/macos/silence-the-startup-chime',
              '/macos/batch-convert-doc-to-pdf-with-libreoffice'
            ]
          }
        ]
      },
      '/ru/': {
        selectText: 'Языки',
        label: 'Русский',
        lastUpdated: 'Обновлено',
        sidebarDepth: '5',
        sidebar: [
          {
            title: 'macOS',
            children: [
              '/ru/macos/nalog-ru-digital-signature'
            ]
          }
        ]
      }
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
    }
  },
  plugins: [
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).toISOString()
      }
    }],
    ['@vuepress/google-analytics', {
      'ga': 'UA-142563675-1'
    }],
    ['disqus', {}],
    ['container', {
      type: 'output',
      defaultTitle: {
        '/': 'Output',
        '/ru/': 'Вывод'
      },
      before: info => `<div class="output"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['sitemap', {
      'hostname': 'https://notes.maxie.xyz',
      'exclude': ['/404.html']
    }]
  ],
  locales: {
    '/': {
      lang: 'en-GB',
      title: 'Maxie’s Notes',
      description: 'Maksim Shkrebtan’s personal documentation website'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Maxie’s Notes',
      description: 'Личные заметки Максима Шкребтана'
    }
  }
}
