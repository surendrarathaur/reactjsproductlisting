import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import DataTable from 'react-data-components/lib/DataTable'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      productlist: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4200/product')
      .then(response => response.json())
      .then(data => this.setState({ productlist:data.shipments }));
  }

  render() {
    let columns = [
      { title: 'Id', prop: 'id' },
      { title: 'UserId', prop: 'userId' },
      { title: 'Product Name', prop: 'name' },
      { title: 'Mode', prop: 'mode' },
      { title: 'Type', prop: 'type' },
      { title: 'Destination', prop: 'destination' },
      { title: 'Origin', prop: 'origin' },
      { title: 'Total', prop: 'total' },
      { title: 'Status', prop: 'status' },
    ];

    return (
      <DataTable
        className="container"
        keys="id"
        columns={columns}
        initialData={this.state.productlist}
        initialPageLength={10}
        initialSortBy={{ order: 'descending' }}
      />
    );
  }
}

export default App;
