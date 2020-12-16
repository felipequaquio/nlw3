import Image from '../models/Image'

const { LOCAL_SERVER_PORT } = process.env

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:${LOCAL_SERVER_PORT}/uploads/${image.path}`
    }
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}