let button = document.querySelector('button')
let dog = document.querySelector('#dog')

button.addEventListener('click' , hi)


function hi (){
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      // handle success
      console.log(response)
      dog.children[0].attributes['src'].value = response.data.message
      dog.append('ruff!!!')
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

