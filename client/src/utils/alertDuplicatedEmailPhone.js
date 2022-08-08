export const alertDuplicatedEmailPhone = () => {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-danger alert-dismissible" role="alert">`,
    `   <div>El correo electrónico o número de teléfono ya se encuentra registrado</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
};
