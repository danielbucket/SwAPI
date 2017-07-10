export const starItem = (block, type) => {
  Object.assign(block, {type: type})
  const newFavItems = [...this.state.favoriteItems, block]
  const findBlock = this.state.favoriteItems.indexOf(block)

  if (findBlock >= 0) {
    const newState = newFavItems.filter( cVal => cVal.id !== block.id )
    this.setState({
      favoriteItems: newState,
      favoriteCount: newState.length
    })
  }

  if (findBlock === -1) {
    this.setState({
      favoriteItems: newFavItems,
      favoriteCount: newFavItems.length
    })
  }
}
