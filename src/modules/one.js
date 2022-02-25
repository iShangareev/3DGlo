const one = () => {
  const pathName = '/src/modules/one.js'

  function path(pathName) {
    let name = pathName.split('/').pop();
    return console.log(name);
  }

  path(pathName)
}

export default one;
