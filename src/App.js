import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProductItem from './AddProductItem';
import './App.css';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'Apple Watch',
    price: 350
  },
  {
    name: 'MacBook',
    price: 1250
  }
]

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts });
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }

      return product;
    });

    this.setState({ products });
  }
  render() {
    return (
      <div className="App">
      <h1>PRODUCT MANAGEMENT INTERFACE</h1>

      <AddProductItem
        onAdd={this.onAdd}
      />

      {
        this.state.products.map(product => {
          return (
            <ProductItem
            key={product.name}
            {...product}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
