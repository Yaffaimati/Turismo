import Item from '../Item/Item'

const ItemList = ({items}) => {
    return (
      <section className="products-container">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    )
  }

export default ItemList;