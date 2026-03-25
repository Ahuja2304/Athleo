export default defineAppConfig({
  docus: {
    title: 'Athleo Docs',
    description: 'Docs and guides around Athleo',
    socials: {
      github: 'Ahuja2304/Athleo',
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
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    // Add a home property to explicitly define the home page
    home: {
      title: 'Welcome to Athleo',
      description: 'Your comprehensive fitness tracking solution.'
    },
  }
})
