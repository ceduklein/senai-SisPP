const openModal = (x) => {
  let modal = document.getElementById(x);
  if (typeof modal == 'undefined' || modal === null)
    return;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

const closeModal = (x) => {
  let modal = document.getElementById(x);
  if (typeof modal == 'undefined' || modal === null)
    return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

const estados = ['--', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS',
  'RO', 'RR', 'SC', 'SE', 'SP', 'TO'];

const regioes = ['--', 'Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'];

const loadUF = (uf) => {
  let select = document.getElementById(uf);
  
  estados.forEach(e => {
    let option = document.createElement('option');
    option.text = e;
    option.value = e;
    select.add(option);
  });
}

function loadRegiao(regiao) {
  let select = document.getElementById(regiao);

  regioes.forEach(r => {
    let option = document.createElement('option');
    option.text = r;
    option.value = r;
    select.add(option);
  })
}