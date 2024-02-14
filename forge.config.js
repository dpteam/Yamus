module.exports = {
  packagerConfig: {
    name: "Yamus",
    arch: 'all',
    buildIdentifier: 'prod',
    packagerConfig: {
      appBundleId: 'xyz.dartpower.yamus'
    },
    appCopyright: 'Copyright (c) 2024 DartPower Team & Yandex. All Rights Reserved.',
    executableName: "Yamus",
    icon: './assets/icon.png',
    out: './dist',
    platform: [
      'darwin',
      'win32',
      'linux',
      'mas'
    ],
    win32metadata: {
      CompanyName: 'DartPower Team',
      FileDescription: 'Yandex.Music Desktop App',
      InternalName: 'Yamus',
      ProductName: 'Yamus'
    },
    appCategoryType: 'public.app-category.music',
    darwinDarkModeSupport: true,
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-appx',
    //   config: {
    //     packageName: 'Yamus',
    //     packageDisplayName: 'Yamus',
    //     packageDescription: 'Yandex.Music Desktop App',
    //     publisher: 'CN=developmentca',
    //     devCert: './assets/devcert.pfx',
    //     certPass: 'process.env.certPass'
    //   }
    // },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: "Yamus",
        authors: 'DartPower Team',
        copyright: 'Copyright (c) 2024 DartPower Team. All Rights Reserved.',
        description: 'Yandex.Music Desktop App',
        // exe: 'Yamus',
        setupExe: 'Yamus.exe',
        iconUrl: 'https://yastatic.net/s3/doc-binary/src/support/music/ru/image/icon_color.png',
        loadingGif: './assets/loading.gif'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        additionalDmgOptions: {},
        name: 'Yamus',
        background: './assets/background.png',
        icon: './assets/icon.png'
      }
    },
    // {
    //   name: '@electron-forge/maker-pkg',
    //   config: {
    //     identity: 'yamus-signing-key'
    //   }
    // },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          name: 'Yamus',
          genericName: 'Yamus',
          productName: 'Yamus',
          description: 'Yandex.Music Desktop App',
          maintainer: 'DartPower',
          homepage: 'https://dpteam.github.io',
          icon: './assets/icon.png',
          depends: [
            "libgtk-3-0",
            "libnss3",
            "libxtst6",
            "xdg-utils",
            "libatspi2.0-0",
            "libuuid1"
          ],
          categories: [
            'Graphics',
            'Office',
            'Utility'
          ]
        }
      },
    },
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          productName: 'Yamus',
          id: 'xyz.dartpower.yamus',
          genericName: 'Yamus',
          icon: './assets/icon.png',
          description: 'Yandex.Music Desktop App',
          modules: [
            "libgtk-3-0",
            "libnss3",
            "libxtst6",
            "xdg-utils",
            "libatspi2.0-0",
            "libuuid1"
          ],
          categories: [
            'Graphics',
            'Office',
            'Utility'
          ]
        }
      }
    },
    {
      name: '@electron-forge/maker-snap',
      config: {
        name: 'Yamus',
        executableName: 'Yamus.snap',
        grade: 'stable'
      }
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        draft: true,
        authToken: 'GITHUB_TOKEN',
        tagPrefix: 'v',
        repository: {
          owner: 'dpteam',
          name: 'Yamus'
        },
        prerelease: false
      }
    },
    {
      name: '@electron-forge/publisher-snapcraft',
      config: {
        release: "latest/stable"
      }
    },
  ]
};
