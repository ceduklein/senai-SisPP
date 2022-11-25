function openModal(x) {
  let modal = document.getElementById(x);
  if (typeof modal == 'undefined' || modal === null)
    return;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(x) {
  let modal = document.getElementById(x);
  if (typeof modal == 'undefined' || modal === null)
    return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}