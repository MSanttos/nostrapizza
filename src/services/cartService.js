export const setItem = (id, action = 'add', len = 1) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  const name = `Product ${id}` // Buscar nome do produto api por id
  len = len <= 0 ? 1 : len

  if (Array.isArray(cart)) {
    const item = cart.filter((item) => {
      return item.id === id
    })[0]

    if(item) {
      item.len = action === 'change'
        ? len
        : action === 'sub'
          ? item.len - len <= 0
            ? 1
            : item.len - len
          : item.len + len
    } else {
      cart.push({
        id,
        name,
        len
      })
    }
  } else {
    cart = [{
      id,
      name,
      len
    }]
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeItem = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart'))

  cart = cart.filter((item) => {
    return item.id !== id
  })

  localStorage.setItem('cart', JSON.stringify(cart))
}

export const getItems = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))

  return cart
}

this.state.cart.map((item) => (
    <div>
        Item: {item.name}
        <br />
        Qtd: {item.len}
        <br />
        <br />
    </div>
))

