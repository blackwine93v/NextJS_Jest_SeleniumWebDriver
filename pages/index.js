import { Component } from 'react';
import { Layout } from '../components/'

class Home extends Component {
  constructor() {
    super()
    this.state = { name: 'Vuong' }
  }

  changeName = (e) => { this.setState({ name: e.target.value }) }

  render() {
    return (
      <Layout>
        <h3>Home</h3>
        <p>Hello, {this.state.name}</p>
        <br />
        <input type='input' onChange={this.changeName} value={this.state.name} />
      </Layout>
    )
  }
}


export default Home