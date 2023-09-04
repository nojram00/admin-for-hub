function convert(file : Blob){
  return new Promise((resolve, reject) => {
    const filereader = new FileReader()

    filereader.readAsDataURL(file)
    filereader.onload = () => {
        resolve(filereader.result)
    }
    filereader.onerror = (error) => {
      reject(error)
    }
  })

}


export { convert }
