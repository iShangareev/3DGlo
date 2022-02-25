const two = () => {
  const pathName = '/src/modules/two.js'

  function path(pathName) {
    let name = pathName.split('/').pop();
    return console.log(name);
  }

  path(pathName)
}

export default two;
