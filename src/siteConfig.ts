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
  },
  {
    number: '02',
    name: 'Avaliação facial',
    description: 'Um primeiro encontro para ouvir o que você busca e construir um plano de cuidado com calma.',
  },
  {
    number: '03',
    name: 'Plano personalizado',
    description: 'Orientação individual, pensada a partir da sua identidade e definida em avaliação profissional.',
  },
];

export function whatsappLink(topic: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '#contato';

  const message = `Olá, Dra. Bruna! Gostaria de conversar sobre ${topic}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}