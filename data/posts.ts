import type { Post } from '@/types/post';

export const posts: Post[] = [
  {
    id: 1,
    date: '2025-09-10',
    text: "primeiro post do nosso 'twitter', mal posso esperar pra viver mais momentos com você! ❤️",
    isPinned: true,
  },
  {
    id: 2,
    date: '2025-07-10',
    text: 'Gosta: Rap10 de frango com catupiry',
    media: ['/images/parque.jpg'],
  },
  {
    id: 3,
    date: '2025-07-10',
    text: 'Gosta: Qualquer coisa com frango. Ela parece gostar muito de frango, especialmente se tiver catupiry.',
  },
  {
    id: 4,
    date: '2025-07-10',
    text: 'Gosta: Meio-termo na intensidade do relacionamento: nem muito em cima, nem muito distante, aquele meio termo saudável, respeitando o espaço do outro, sem tentar se engolir (em todos os sentidos, aparentemente).',
    media: ['/images/parque.jpg'],
  },
  {
    id: 5,
    date: '2025-07-10',
    text: "Gosta: Meu perfil e personalidade. Ela deu 'like' porque eu parecia 'meio abublé', e ela gosta disso.",
    media: ['/images/parque.jpg'],
  },
  {
    id: 6,
    date: '2025-07-10',
    text: "Gosta: Meus amigos. Ela os chamou de 'todos divos'.",
  },
  {
    id: 7,
    date: '2025-09-07',
    text: "Ela comentou que conversar comigo é como ''voltar pra casa''.",
  },
  {
    id: 10,
    date: '2025-07-18',
    text: 'Hoje ela me mandou uma foto de um pôr do sol lindo. Fiquei pensando em como tudo parece mais bonito quando compartilho com ela.',
    media: ['/images/por_do_sol.jpg'],
  },
  {
    id: 11,
    date: '2025-08-23',
    text: 'Nosso primeiro encontro foi irado! Me senti tão à vontade com ela, como se nos conhecêssemos há anos. Mal posso esperar pelo próximo! ❤️',
  },
  {
    id: 12,
    date: '2025-07-12',
    text: 'Ela me disse que Fuga das Galinhas é sobre capitalismo selvagem e Nazismo. Eu vi o filme muito novo, preciso rever com essa perspectiva.',
    media: ['/images/chickens.jpg'],
  },
  {
    id: 13,
    date: '2025-07-13',
    text: 'Ela topou vir aqui em casa ver filme. Eu fingi estar tranquilo, mas por dentro eu tava surtando de felicidade, correu tudo bem e eu fiz uma caipifruta pra ela, deixei na propria fruta, ficou irado!',
    media: ['/images/caipifruta.jpg'],
  },
  {
    id: 14,
    date: '2025-07-30',
    text: 'A gente passou horas conversando sobre filmes e séries. Eu adoro quando ela entra nas teorias malucas comigo.',
  },
  {
    id: 15,
    date: '2025-07-26',
    text: 'Ela comentou que gosta do jeito que eu explico as coisas, mesmo quando eu acho que tô viajando demais.',
  },
  {
    id: 16,
    date: '2025-08-01',
    text: 'Hoje eu tava meio cansado, mas bastou uma mensagem dela pra eu animar. Ela tem esse efeito em mim.',
  },
  {
    id: 17,
    date: '2025-08-02',
    text: 'Ela me mandou uma foto dela rindo. Sério, se eu pudesse colocava essa risada em looping.',
    media: ['/images/laugh.jpg'],
  },
  {
    id: 18,
    date: '2025-08-03',
    text: 'Ela é tão atenciosa com os detalhes. Lembra de coisas que até eu esqueci que falei.',
  },
  {
    "id": 19,
    "date": "30 de Agosto de 2025",
    "text": "Hoje ela vem conhecer os meus amigos (J, Cacau e Dan), fiquei tão ansioso que passei coisa de 2h30 cortando alimentos, vinagrete para referência:",
    "media": ["/images/vinagrete.jpg"],
  },
  {
    id: 20,
    date: '2025-08-03',
    text: 'Ela falou que gosta de ouvir minhas playlists. Eu tô oficialmente em modo curador de trilha sonora da nossa história.',
  },
  {
    id: 21,
    date: '2025-08-31',
    text: 'Hoje eu percebi que penso nela em horários aleatórios do dia. Tipo agora.',
  },
  {
    id: 22,
    date: '2025-08-02',
    text: 'Ela me contou de um dia difícil que teve e eu só queria poder abraçar ela na hora.',
  },
  {
    id: 23,
    date: '2025-08-30',
    text: '????',
    media: ['/images/parque_nublado.jpg'],
  },
  {
    id: 24,
    date: '2025-08-30',
    text: 'Hoje ela me mandou umas fotos nossas. Fiquei feliz demais revendo tudo aquilo, parece pouco tempo mas já é tanta coisa.',
    media: ['/images/nos_parque.jpg', '/images/nos_parque_2.jpg'],
  },
  {
    id: 25,
    date: '2025-08-30',
    text: 'Ela falou de como gosta de coisas simples: comer, conversar, ficar perto. Eu também, principalmente se for com ela.',
  },
  {
    id: 26,
    date: '2025-08-02',
    text: 'Ela odeia latim, disse que reprovou uma vez.',
    media: ['/images/3meses.jpg'],
  },
  {
    id: 27,
    date: '2025-08-02',
    text: 'Ela flerta esquisito, eu gosto disso, normalmente ela me xinga ou fala coisas sem sentido',
    media: ['/images/flerte.jpg'],
  },
  {
    id: 28,
    date: '2025-08-03',
    text: 'Nós dois não temos certeza de como lidar com tanta intensidade, mas estamos dando um jeito.',
  },
  {
    id: 29,
    date: '2025-08-02',
    text: 'Ela gosta de romances, dos bons e dos ruins, e eu espero que ela viva o próprio romance agora.',
  },
  {
    id: 30,
    date: '2025-08-02',
    text: 'Posso fazer piadas com ela como se ela fosse um dos caras, que isso, a mulher perfeita?',
    media: ['/images/cuspe.jpg'],
    comments: [
      {
        id: 1,
        author: 'Você',
        text: 'Isso soou meio gay mas enfim',
        date: '2 de Agosto de 2025',
      },
    ],
  },
  {
    id: 31,
    date: '2025-08-03',
    text: 'Ela me chamou pra ir na casa dela, to meio receoso, mas acho que vai ser legal.',
    media: ['/images/3meses.jpg'],
  },
  {
    id: 32,
    date: '2025-08-03',
    text: 'Ela me chamou pra ir na casa dela, to meio receoso, mas acho que vai ser legal.',
    media: ['/images/3meses.jpg'],
  },
  {
    id: 33,
    date: '2025-08-03',
    text: 'Ela contou de alguns relacionamentos anteriores que não foram tão legais, eu só quero poder fazer diferente.',
  },
  {
    id: 34,
    date: '2025-09-02',
    text: 'Ela tem uma forma muito única de ver o mundo. Eu aprendo demais com ela.',
  },
  {
    id: 35,
    date: '2025-09-02',
    text: 'Hoje tive um dia bem pesado no trabalho, mas só de falar com ela no fim do dia consegui respirar melhor.',
  },
  {
    id: 36,
    date: '2025-09-03',
    text: 'Ela me mandou mensagem só pra perguntar se eu tinha comido. Parece coisa simples, mas isso me desmonta.',
  },
  {
    id: 37,
    date: '2025-09-03',
    text: 'Hoje a gente riu de uma piada interna nossa que ninguém mais entenderia. Eu amo isso.',
  },
  {
    id: 38,
    date: '2025-09-06',
    text: 'Fui na farmácia comprar uma escova de dente e sem perceber peguei a marca BITUFO, rimos bastante disso.',
    media: ['/images/bitufo.jpg'],
  },
  {
    id: 39,
    date: '2025-09-06',
    text: 'Hoje conheci as amigas dela, Alissa, Laís e Bia, e foi tudo muito divertido. Cada uma à sua maneira, mas todas muito queridas. Alissa é doce e atenciosa, Laís é engraçada e acolhedora, e Bia é uma energia pura em forma de gente.',
    comments: [
      {
        id: 1,
        author: 'Você',
        text: 'Elas parecem ter gostado de mim, a Laís foi a que mais me chamou atenção pois é engraçada, atenciosa e divertida!',
        date: '6 de Setembro de 2025',
      },
      {
        id: 2,
        author: 'Você',
        text: 'A Bia é MUITO engraçada e pareceu estar a vontade',
        date: '6 de Setembro de 2025',
      },
      {
        id: 3,
        author: 'Você',
        text: 'Alissa ficou mais quieta em alguns momentos e pareceu ser bem fofa e sensível.',
        date: '6 de Setembro de 2025',
      },
    ],
  },
  {
    id: 40,
    date: '2025-09-04',
    text: 'Ela contou um pouco de como se sente em certos ambientes sociais. Eu admiro muito a forma como ela se entende.',
  },
  {
    id: 41,
    date: '2025-09-02',
    text: 'Tive um momento de ansiedade hoje e ela foi super paciente comigo. Ela nem sabe, mas isso significou muito pra mim.',
  },
  {
    id: 42,
    date: '2025-09-07',
    text: 'Tiramos essa foto incrível hoje! Adicionei ela no nosso fundo do Whatsapp e mandei pra Cacau e outros amigos.',
    media: ['/images/us.jpg'],
    comments: [
      {
        id: 1,
        author: 'Cacau',
        text: 'Lindinhos demais aaaaaaaa',
        date: '07 de Setembro de 2025',
      },
      {
        id: 2,
        author: 'J',
        text: 'EEEEEEITA PEEEEEGA XEEEEEEEEERA',
        date: '07 de Setembro de 2025',
      },
      {
        id: 3,
        author: 'Vivs',
        text: 'AI QUE LINDOCOS',
        date: '07 de Setembro de 2025',
      },
    ],
  },
  {
    id: 43,
    date: '2025-09-07',
    text: 'Conversamos seriamente sobre algumas coisas como o que esperamos da relação, como lidamos com ciúmes, inseguranças e o que queremos construir juntos. Sinto que estamos construindo algo sólido e verdadeiro juntos.',
    comments: [
      {
        id: 1,
        author: 'Você',
        text: 'Somos muito compatíveis em tantos sentidos que isso chega a ser assustador.',
        date: '07 de Setembro de 2025',
      },
    ],
  },
  {
    id: 44,
    date: '2025-09-11',
    text: 'Hoje a gente conversou sobre coisas mais pesadas e, mesmo assim, eu me senti leve por poder falar com ela.',
  },
  {
    id: 45,
    date: '2025-09-11',
    text: 'Ela tem um jeito muito carinhoso de discordar. É impressionante como ela consegue ser firme e doce ao mesmo tempo.',
    comments: [
      {
        id: 1,
        author: 'Soshi',
        text: 'É uma rapadura mesmo né',
        date: '12 de Novembro de 2025',
      },
    ],
  },
  {
    id: 46,
    date: '2025-09-11',
    text: 'Eu às vezes fico com medo de não ser bom o bastante pra ela, mas ao mesmo tempo ela me faz querer ser melhor.',
  },
  {
    id: 47,
    date: '2025-09-11',
    text: 'Ela falou algo sobre merecer um amor tranquilo. Eu espero muito poder ser parte disso.',
  },
  {
    id: 48,
    date: '2025-09-12',
    text: 'Hoje eu me senti meio inseguro, mas ela me apoiou do jeitinho dela e isso valeu o dia inteiro.',
  },
  {
    id: 49,
    date: '2025-09-12',
    text: 'Ela comentou sobre uma situação difícil que viveu e eu só admirei ainda mais a força dela.',
  },
  {
    id: 50,
    date: '2025-09-12',
    text: 'Às vezes eu paro no meio do dia e penso: “como é que eu tive tanta sorte de cruzar com ela?”.',
    comments: [
      {
        id: 1,
        author: 'Soshi',
        text: 'Lá ele',
        date: '12 de Novembro de 2025',
      },
    ],
  },
  {
    id: 51,
    date: '2025-08-30',
    text: 'Teve um dia que a gente ficou falando sobre bobagens por horas e eu queria muito repetir isso mil vezes.',
  },
  {
    id: 52,
    date: '2025-08-30',
    text: 'Ela foi super honesta comigo sobre uma situação, e eu respeito muito isso nela.',
  },
  {
    id: 53,
    date: '2025-08-30',
    text: 'Ela me mandou algumas fotos antigas e vou colocar aqui pra salvar :)',
    media: ['/images/pequetufa.jpg', '/images/pequetufa2.jpg', '/images/pequetufa3.jpg', '/images/pequetufa4.jpg'],
  },
  {
    id: 54,
    date: '2025-08-25',
    text: 'Ela editou um vídeo que foi numa trilha com as meninas e me mandou :)',
    media: ['/images/trilha.mp4'],
  },
  {
    id: 55,
    date: '2025-08-22',
    text: 'Honestamente eu nem sei quem são essas crianças com tablet mas ela quis compartilhar e achei fofo kkkkkkkkk',
    media: ['/images/kids.jpg'],
  },
  {
    "id": 56,
    "date": "2025-08-30",
    "text": "Ela não sente ciúmes da Cacau e eu acho isso MUITO maneiro, penso que pode ser confuso pra outras pessoas mas eu gosto que ela entenda e espero que saiba que as coisas tem que fazer sentido pra mim e ela e mais ninguém.",
  },
  {
    "id": 57,
    "date": "2025-09-02",
    "text": "Flertei com uma piada sobre namoro, usando música brasileira que ela gosta, acho que ela ficou receosa, tenho medo de ter estragado tudo.",
    "media": ["/images/flertenamoro.jpg"],
  },
  {
    "id": 58,
    "date": "2025-09-07",
    "text": "Conversamos MUITO sobre sexo e como eu e ela nos sentimos quanto a isso, também pude ser honesto e expressar meu desejo quanto a ela, que cresce proporcionalmente ao respeito que ela me mostra.",
    "media": ["/images/sonicpilantra.webp"],
  },
  {
    "id": 59,
    "date": "2025-09-07",
    "text": "Hoje eu estava muito cansado pois ajudei minha mãe com a feira, porém eu não suportaria a ideia de não ver ela, então fui mesmo assim, e foi ótimo, me senti muito feliz por estar com ela, mesmo cansado. Acho que isso é amor de verdade, quando a presença do outro é mais importante que qualquer desconforto ou dificuldade.",
  },
  {
    "id": 60,
    "date": "2025-09-03",
    "text": "Ela me manda coisas aleatórias diariamente, parece querer compartilhar da existência comigo, acho muito fofo, Laís Caldas na geladeira para referencia:",
    "media": ["/images/laiskdvc.mp4"],
  },
  {
    "id": 61,
    "date": "2025-09-07",
    "text": "Eu ganhei um 'escalda pés'' no sorteio, não sei pra que serve então vou entregar pra Cacau, o curioso é que eu tinha 4 bilhetes participantes e eu só ganhei com o único que eu não escrevi, senti como se fosse um sinal pra que eu aprendesse a aceitar as coisas com facilidade, alegria e glória sem depender de uma ação minha.",
    "media": ["/images/sorteio.mp4"],
  },
  {
    "id": 62,
    "date": "2025-09-07",
    "text": "Comprei um doce de figo pra ela, logo depois ela disse que estava com vontade de comer figo, colei uns post-its no doce com os dizeres ''um doce para meu maracujá azedo'' a esse ponto eu já queria chamar ela de minha e apesar de achar que ela gostaria disso eu quis ser sútil e ir devagar.",
  },
  {
    "id": 63,
    "date": "2025-09-07",
    "text": "A Bia ganhou um puxa-saco de crochê no sorteio da feira de artesanato! Talvez isso não devesse estar no diário mas tô seguindo meu coração.",
    "media": ["/images/sorteiobia.jpg"],
  },
  {
    "id": 64,
    "date": "2025-09-12",
    "text": "Sinto um pouco de vergonha de escrever isso mas se algum dia você for ler isso, significa que deu tudo certo então tudo bem dizer, você praticamente me ensinou na prática, somente existindo, o que tesão. Eu nunca tinha sentido isso por ninguém, e olha que eu já me apaixonei algumas vezes, mas com você é diferente, é algo que eu não sei explicar direito, só sei que é bom demais. Obrigado por ser você, por ser tão incrível e por me fazer tão feliz. Mal posso esperar para ver onde essa nossa jornada vai nos levar. ❤️",
  },
  {
    "id": 65,
    "date": "2025-09-04",
    "text": "Ela me chamou pra sair com as amigas dela, lá em Uberlândia, to meio receoso, mas acho que vai ser legal.",
    "media": ["/images/bitufo.jpg"],
    "comments": [{
      "id": 1,
      "author": "Pitufo",
      "text": "Tive a ideia de fazer um slide pra me apresentar pra elas!",
      "date": "2025-09-04",
    },
    {
      "id": 2,
      "author": "Pitufo",
      "text": "Aqui está! https://www.canva.com/design/DAGx3NRj-K8/Lvg2lJta2u5wANWfYzSj1g/edit?utm_content=DAGx3NRj-K8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      "date": "2025-09-04",
    },]
  },
  {
    "id": 66,
    "date": "2025-07-10",
    "text": "Ela usa essa figurinha do Sonic pilantra excessivamente, acho engraçado, mas ela faz até pessoalmente.",
    "media": ["/images/sonicpilantra.webp"],
    "comments": []
  },
  {
    "id": 67,
    "date": "2025-09-11",
    "text": "Ela sempre faz questão de me incluir em tudo que faz, mesmo distante, acho isso fofo, Laís Caldas deitada pra referencia:",
    "media": ["/images/laiscaldas.jpg, /images/laiscaldas2.jpg"],
    "comments": []
  },
];

export const postsData = posts;