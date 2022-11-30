import Request from "../../helpers/AppRequest"

const EntitiesApi = {
  get: (endpoint, id) => {
    let url = endpoint 
    if(id) { url += id }
    return Request.get(url)
      .then(response => { return response.data })
      .catch(error => { throw error })
  },
  save: (endpoint, data) => {
    if(!data.id){
      return Request.post(endpoint, data)
        .then(response => { return response.data })
        .catch(error => { throw error })
    }
    else{
      return Request.put(endpoint + data.id, data)
        .then(response => { return response.data })
        .catch(error => { throw error })
    }
  },
  delete: (endpoint, id) => {
    return Request.delete(endpoint + id, {})
      .then(response => { return response.data })
      .catch(error => { throw error })
  },
  habilitar: (endpoint, id, habilitar) => {
    let url = habilitar ? 
      endpoint + 'habilitar/' + id :
      endpoint + 'deshabilitar/' + id
    return Request.put(url, {})
      .then(response => { return response.data })
      .catch(error => { throw error })
  }
}

export default EntitiesApi