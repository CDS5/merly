import apiRequest from './api.js'


const getIDIsmerely = async (id) => {
  let response = ''
  try {
    let uri  = process.env.NODE_ENV === 'production' ? 'https://www.ismerely.me' : 'api'
    const request = await apiRequest('get', `${uri}/configuracion/Ajax_eCommerce_Amigo.php?llaveabuscar=${id}`);
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
