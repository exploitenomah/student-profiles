


export const fetchData = async (url = '', method = 'GET', body = {}) => {

  if (method === 'GET') {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } else {
    const response = await fetch(
      url,
      {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
    const data = await response.json()
    return data
  }
}
