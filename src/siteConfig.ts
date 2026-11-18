export const siteConfig = {
  // Use apenas dígitos com código do país, por exemplo: 5511999999999.
  whatsappNumber: '5554996453722',
  address: '',
  mapsUrl: '',
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
];

export function whatsappLink(topic: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '#contato';

  const message = `Olá, Dra. Bruna! Gostaria de conversar sobre ${topic}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
