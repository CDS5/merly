import apiRequest from './api.js'


const getIDIsmerely = async (id) => {
  let response = ''
  try {
    const request = await apiRequest('get', `'api'/configuracion/Ajax_eCommerce_Amigo.php?llaveabuscar=${id}`);
    const parser = new DOMParser();
    const doc = parser.parseFromString(request, 'text/html');
    const correctDiv = doc.querySelector('.correct');
    if (correctDiv) {
      const text = correctDiv.innerText;
      response = text.split('Cliente:')[1].trim();
    }
  } catch (err) {
    console.error(err);
    response = ''
  }
  return response;
}


export {
  getIDIsmerely
}
