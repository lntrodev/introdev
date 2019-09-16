require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `IntroDev`,
    siteTitleAlt: `IntroDev`,
    siteUrl: `https://introdev.xyz`,
    siteDescription: `O IntroDev é um evento dedicado à abordagem de tecnologias, conceitos e habilidades importantes para o mercado de trabalho atual na área de TI. Visto que existe um grande número de recém-formados nos cursos relacionados à área que possuem dificuldade em ingressar no mercado de trabalho, o IntroDev surge como uma tentativa de diminuir essa lacuna existente entre a academia e o mercado.`,
    siteImage: `/introdev-ico.png`,
    talksData: [
      {
        id: 0,
        title: 'Introdução à Regex',
        description: 'Expressões Regulares são ferramentas poderosas para encontrar e extrair informação de textos. Nessa talk veremos de forma simples como elas funcionam na prática. Prepare-se para adicioná-las ao seu arsenal de técnicas que todo programador deve conhecer.',
        time: '08:00',
        speaker: 'Samuel Flores'
      },
      {
        id: 1,
        title: 'Precificando projetos',
        description: 'Quem nunca teve que responder a essa pergunte: “Quanto custa para fazer um site?”, o objetivo dessa palestra é que você consiga elaborar uma proposta para o seu futuro cliente com valor, tempo de desenvolvimento e com todas as funcionalidades do projeto.',
        time: '08:45',
        speaker: 'Rodrigo Ulisses'
      },
      {
        id: 2,
        title: 'Coffe Break',
        time: '09:30'
      },
      {
        id: 3,
        title: 'Open source: O que é esse mundo e como entrar nele',
        description: 'Nessa talk iremos abordar sobre o que é open source, como ele pode servir de portfólio e ajudar ao estudante conseguir seu primeiro emprego, serão mostrados exemplos de grandes projetos open sources, também falaremos de como começar a contribuir e quais são os desafios.',
        time: '10:30',
        speaker: 'Neto Chaves'
      },
      {
        id: 4,
        title: 'Builders - O "must have" de todo dev front-end',
        description: ' Os builders, automatizadores ou empacotadores são ferramentas essenciais no ecosistema de um dev front-end. Isso por conta do crescente número de novas tecnologias que surgem com o propósito de facilitar, inserir novos conceitos e metodologias no desenvolvimento front-end. Por esses e alguns outros motivos, eles estão sempre presentes na lista de conhecimentos desejáveis em ofertas de emprego pelo mundo inteiro',
        time: '11:15',
        speaker: 'Rafael Belo'
      },
    ],
    speakersData: [
      {
        name: 'Samuel Flores',
        role: 'Desenvolvedor Back-end',
        company: {
          name: 'Codeminer42',
          url: 'http://codeminer42.com'
        },
        talkTitle: 'Introdução à Regex',
        imageSrc: 'samuel-flores.jpg'
      },
      {
        name: 'Rodrigo Ulisses',
        role: 'Desenvolvedor Back-end',
        company: {
          name: 'Devworks',
          url: '#'
        },
        talkTitle: 'Precificando projetos',
        imageSrc: 'rodrigo-ulisses.jpeg'
      },
      {
        name: 'Neto Chaves',
        role: 'Desenvolvedor Front-end',
        company: {
          name: 'Codeminer42',
          url: 'http://codeminer42.com'
        },
        talkTitle: 'Open source: O que é esse mundo e como entrar nele',
        imageSrc: 'neto-chaves.jpeg'
      },
      {
        name: 'Rafael Belo',
        role: 'Desenvolvedor Back-end',
        company: {
          name: 'Nutrebem',
          url: 'http://nutrebem.com.br'
        },
        talkTitle: 'Builders - O must-have de todo dev front-end',
        imageSrc: 'rafael-belo.png'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
      optipons: {},
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
