module.exports = {
  images: {
    unoptimized: true,
  },
  basePath: "/pages",
  assetPrefix: "/pages/",

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/Pokertimer',
          destination: 'https://isthisthereallife.github.io/Pokertimer/',
        },
        {
          source: '/pages/Pokertimer',
          destination: `https://isthisthereallife.github.io/pages/Pokertimer`,
        },
      ],
    }
  },
}



//module.exports = async (phase, { defaultConfig }) => {
/**
 * @type {import('next').NextConfig}
 */

/*const nextConfig = {
  // config options here 
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [],
  }
}
return nextConfig
}



module.exports = async function exportPathMap(defaultPathMap,
{ dev, dir, outDir, distDir, buildId }) {
return {
  '/': { page: '/' },
  '/about': { page: '/about' },
  '/projects': { page: '/projects' },
  '/projects/SVTpk': { page: '/projects', query: { title: 'SVTpk' } },
  '/projects/Pokertimer': { page: '/projects', query: { title: 'Pokertimer' } },
  '/projects/Pokertimer/Pokertimer': { page: 'projects/Pokertimer', query: { title: 'Pokertimer' } },
  '/projects/Murvel': { page: '/projects', query: { title: 'Murvel' } },
  '/projects/GilfoyleGo': { page: 'projects', query: { title: 'GilfoyleGo' } }
}
}
*/
