/* ============================================================
   Conteúdo do portfólio — Christian Paiva.
   Plain JS — anexa em window.CP. (Sem JSX.)
   ============================================================ */
window.CP = {
  profile: {
    name: 'Christian Paiva',
    firstName: 'Christian',
    lastName: 'Paiva',
    role: 'Designer UX/UI',
    city: 'Rio de Janeiro, BR',
    seniority: 'Júnior',
    availability: 'Aberto para oportunidades',
    years: '≈ 3 anos de prática',
    email: 'christianpaiva11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/christiantpaiva/',
    cv: 'assets/christian-paiva-cv - rj.pdf',
    photo: 'assets/perfil.webp',
    greeting: 'Olá, eu sou',
    ring: 'Pesquisa · Fluxo · Interface · ',
    statement:
      'Sou um designer UX/UI partindo do problema — pesquisa, fluxo e interface.',
    about:
      'Carioca, com cerca de 3 anos de prática em design. Sempre fui atraído pela funcionalidade das coisas — entender por que algo funciona ou por que frustra. Aplico essa curiosidade em cada projeto, partindo do problema antes da ferramenta.',
  },

  nav: [
    ['top', 'Início'],
    ['sobre', 'Sobre'],
    ['trabalho', 'Trabalhos'],
    ['skills', 'Skills'],
    ['contato', 'Contato'],
  ],

  tags: ['Pesquisa', 'UX/UI', 'Design Systems', 'Prototipação', 'Figma'],

  skills: [
    { name: 'Produto', icon: 'pen-tool', items: ['Estratégia', 'Roadmap', 'Dados', 'Agile'] },
    { name: 'UX/UI Design', icon: 'shapes', items: ['Visual Design', 'Mobile Apps', 'Sistemas de UI', 'User Journey'] },
    { name: 'Pesquisa', icon: 'file-search', items: ['Product Discovery', 'Entrevista com Usuário', 'Survey', 'Análise Heurística'] },
    { name: 'Psicologia Comportamental', icon: 'lightbulb', items: ['Vieses Cognitivos', 'Padrões de Design', 'Comportamento do Usuário', 'Gatilhos Mentais'] },
  ],

  cases: [
    {
      id: 'coresa',
      index: '01',
      name: 'Coresa',
      year: '2024',
      role: 'Pesquisa · UX/UI',
      tags: ['Pesquisa', 'UX/UI', 'E-commerce'],
      desc: 'Pesquisa com usuários e reestruturação de um e-commerce de cartuchos: busca direta, catálogo legível e checkout com menos atrito.',
      href: 'case-coresa.html',
      cover: 'assets/coresa-listing.jpg',
      tone: 'amber',
      fit: 'cover',
    },
    {
      id: 'carneiro',
      index: '02',
      name: 'Carneiro & Carballido',
      year: '2024',
      role: 'UI Design',
      tags: ['UI Design', 'Web'],
      desc: 'Redesign do site institucional de uma consultoria contábil — hierarquia clara e identidade mais confiável, do desktop ao mobile.',
      href: 'case-carneiro.html',
      cover: 'assets/cc-new-desktop.jpg',
      tone: 'lavender',
      fit: 'cover',
    },
    {
      id: 'seu-treino',
      index: '03',
      name: 'Seu Treino',
      year: '2025',
      role: 'UI Design',
      tags: ['UI Design', 'Mobile', 'Social'],
      desc: 'App social de treinos onde alunos acompanham, publicam e interagem: perfil, feed e seguidores num sistema de UI coeso.',
      href: 'case-seu-treino.html',
      cover: 'assets/st-showcase.jpg',
      tone: 'sage',
      fit: 'cover',
    },
  ],
};
