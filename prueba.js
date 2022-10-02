fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
  //.then(json => console.log(json))
  .then(json => {
    const orden = json.filter(user => user.userId == 1).map(album => album.title).sort((a,b) => a.localeCompare(b))
    const total = orden.reduce((total,current) => total + current)
    console.log(total)
    console.log(orden)})
  