export const siteConfig = {
  // Use apenas dígitos com código do país, por exemplo: 5511999999999.
  whatsappNumber: '5554996453722',
  address: 'Feliz, RS',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Feliz%2C%20RS',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Feliz%2C%20RS&output=embed',
  instagramUrl: '',
};

export const treatmentOptions = [
  {
    number: '01',
    name: 'Harmonização facial',
    description: 'Uma conversa individual sobre seus traços, objetivos e as possibilidades para o seu caso.',
    image: '/img/estetica_facial.jpg',
    details: 'A conversa começa com uma avaliação cuidadosa das proporções, expressões e expectativas. A partir dela, são discutidas as possibilidades para o seu caso, com atenção à sua identidade e ao que faz sentido para você.',
  },
  {
    number: '02',
    name: 'Avaliação facial',
    description: 'Um primeiro encontro para ouvir o que você busca e construir um plano de cuidado com calma.',
    image: '/img/Cuidado_individual.jpg',
    details: 'Um momento para falar sobre o que você busca e conhecer as características do seu rosto. A avaliação ajuda a esclarecer dúvidas e entender quais opções podem ser consideradas para você.',
  },
  {
    number: '03',
    name: 'Plano personalizado',
    description: 'Orientação individual, pensada a partir da sua identidade e definida em avaliação profissional.',
    image: '/img/Rituais_pele.jpg',
    details: 'O plano é construído a partir da conversa e da avaliação profissional, considerando suas expectativas e características individuais. As opções e os cuidados são explicados com calma, sem fórmulas prontas.',
  },
   {
    number: '04',
    name: 'Limpeza profunda',
    description: 'Cuidado de limpeza para remover impurezas e acompanhar as necessidades da sua pele.',
    image: '/img/manchas e espinhas.jpg',
    details: 'A limpeza profunda ajuda a higienizar a pele e remover cravos e resíduos acumulados. O procedimento e os cuidados são definidos conforme as características e a sensibilidade da sua pele, após avaliação profissional.',
  },
   {
    number: '05',
    name: 'Remoção a laser',
    description: 'Avaliação cuidadosa para entender as possibilidades de remoção a laser para o seu caso.',
    image: '/img/remocao-laser.jpg',
    details: 'A indicação da remoção a laser depende do tipo de pigmento, da área tratada e das características da pele. Na avaliação, são explicadas as etapas, os cuidados necessários e as expectativas possíveis para cada caso.',
  },
   {
    number: '06',
    name: 'Microagulhamento',
    description: 'Um cuidado que estimula a renovação da pele, sempre com indicação individualizada.',
    image: '/img/microagulhamento.jpg',
    details: 'O microagulhamento utiliza pequenas agulhas para criar estímulos controlados na pele. A avaliação profissional define se o procedimento é adequado, como será realizado e quais cuidados são importantes antes e depois.',
  },
];

export function whatsappLink(topic: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '#contato';

  const message = `Olá, Dra. Bruna! Gostaria de conversar sobre ${topic}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
