export const taxaJuros = (dataNascimento: Date): number => {
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNascimento.getFullYear();

  if (hoje.getMonth() > dataNascimento.getMonth()) idade++;
  else if (
    hoje.getMonth() === dataNascimento.getMonth() &&
    hoje.getDay() >= dataNascimento.getDay()
  )
    idade++;

  if (idade <= 25) return 0.05;

  if (idade <= 40) return 0.03;

  if (idade <= 60) return 0.02;

  return 0.04;
};
