import React, { Component } from 'react';

class AddProductItem extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <div>
            <h3>Add Product to Price List</h3>
            <form onSubmit={this.onSubmit}>
            <input placeholder="Product name" ref={ nameInput => this.nameInput = nameInput } />
            <input placeholder="Price" ref={ priceInput => this.priceInput = priceInput } />
            <button>Add Product</button>
            </form>
            <hr/>
            </div>
        );
    }
}

export default AddProductItem;
