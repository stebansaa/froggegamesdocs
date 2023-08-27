export default defineAppConfig({
  docus: {
    title: 'Frogge.games documentation site',
    description: 'A unique multiplayer experience that blends survival gameplay, token incentives, and blockchain technology.',
    image: 'https://www.frogge.finance/assets/logo-8f1a76eb.png',
    socials: {
      twitter: 'froggefinance',
      github: 'frogge-game/whitepaper',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://frogge.games'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
