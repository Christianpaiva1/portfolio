/* ============================================================
   Conteúdo compartilhado das duas estruturas do portfólio.
   Plain JS — anexa em window.PF. (Sem JSX.)
   ============================================================ */
window.PF = {
  profile: {
    name: 'Christian Paiva',
    role: 'Designer UX/UI',
    city: 'Rio de Janeiro',
    seniority: 'Júnior',
    availability: 'Aberto para vagas',
    years: '≈ 3 anos de prática',
    email: 'christianpaiva11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/christiantpaiva/',
    photo: 'assets/perfil.webp',
    // Frase-manifesto curta, no tom do design system (declarativa, enxuta).
    statement: 'Designer UX/UI que parte do problema — pesquisa, fluxo e interface.',
    about:
      'Carioca, com cerca de 3 anos de prática em design. Sempre fui atraído pela funcionalidade das coisas — entender por que algo funciona ou por que frustra. Aplico essa curiosidade em cada projeto, partindo do problema antes de abrir qualquer ferramenta.',
  },

  // Métricas/manifesto curto para o hero "painel" da Estrutura B.
  signals: [
    { k: 'Base', v: 'Problema' },
    { k: 'Foco', v: 'Pesquisa · Fluxo · UI' },
    { k: 'Status', v: 'Disponível' },
  ],

  cases: [
    {
      id: 'carneiro',
      index: '01',
      name: 'Carneiro & Carballido',
      year: '2024',
      role: 'UI Design',
      tags: ['UI Design', 'Web'],
      summary: 'Redesign do site institucional de uma consultoria contábil.',
      desc:
        'Reconstrução da presença digital de uma consultoria contábil: hierarquia clara, serviços legíveis e uma identidade mais confiável — do desktop ao mobile.',
      href: 'case-carneiro.html',
      desktop: 'assets/cc-new-desktop.jpg',
      mobile: 'assets/cc-new-mobile.jpg',
      cover: 'assets/cc-new-hero.jpg',
    },
    {
      id: 'coresa',
      index: '02',
      name: 'Coresa',
      year: '2024',
      role: 'Pesquisa · UX/UI',
      tags: ['Pesquisa', 'UX/UI', 'E-commerce'],
      summary: 'Redesign de e-commerce de cartuchos com pesquisa e fluxo simplificado.',
      desc:
        'Pesquisa com usuários e reestruturação de um e-commerce de cartuchos: busca mais direta, catálogo legível e um checkout que reduz o atrito da compra.',
      href: 'case-coresa.html',
      desktop: 'assets/coresa-showcase.png',
      mobile: 'assets/coresa-home.jpg',
      cover: 'assets/coresa-product.jpg',
    },
    {
      id: 'seu-treino',
      index: '03',
      name: 'Seu Treino',
      year: '2025',
      role: 'UI Design',
      tags: ['UI Design', 'Mobile', 'Social'],
      summary: 'Rede social de treinos: perfil, feed e interação entre alunos.',
      desc:
        'App social de treinos onde alunos acompanham, publicam e interagem: perfil, feed e seguidores num sistema de UI coeso para mobile.',
      href: 'case-seu-treino.html',
      desktop: 'assets/st-showcase.jpg',
      mobile: 'assets/st-feed.jpg',
      cover: 'assets/st-profile.jpg',
    },
  ],

  skills: [
    { name: 'Produto', items: ['Estratégia', 'Roadmap', 'Dados', 'Agile'] },
    { name: 'UX/UI Design', items: ['Visual Design', 'Mobile Apps', 'Sistemas de UI', 'User Journey'] },
    { name: 'Pesquisa', items: ['Product Discovery', 'Entrevista com Usuário', 'Survey', 'Análise Heurística'] },
    { name: 'Psicologia Comportamental', items: ['Vieses Cognitivos', 'Padrões de Design', 'Comportamento do Usuário', 'Gatilhos Mentais'] },
  ],

  // Timeline — itens marcados como placeholder (true) são exemplos
  // para o Christian preencher/ajustar depois.
  timeline: [
    { year: '2022', title: 'Primeiros estudos em UX/UI', desc: 'Início no design partindo da curiosidade pela funcionalidade das coisas.', placeholder: true },
    { year: '2023', title: 'Pesquisa & psicologia comportamental', desc: 'Aprofundamento em discovery, entrevistas e comportamento do usuário.', placeholder: true },
    { year: '2024', title: 'Carneiro & Carballido · Coresa', desc: 'Redesign institucional e e-commerce com pesquisa e fluxo simplificado.', placeholder: false },
    { year: '2025', title: 'Seu Treino', desc: 'Rede social de treinos — perfil, feed e interação entre alunos.', placeholder: false },
    { year: '2026', title: 'Disponível para novas oportunidades', desc: 'Aberto a colaborar em produtos que partem do problema.', placeholder: false },
  ],
};
