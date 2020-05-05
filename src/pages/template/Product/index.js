import React from 'react';

import { Container } from './styles';
import api from '../../../services/api';

class Product extends React.Component {
  constructor(){
    super()
    this.state = {
      color: '',
      phone: '',
      email: '',
      name: '',
      description: '',
      product: {}
    }
  }
  async componentDidMount(){
    


    const {id_company,id_web,id} = this.props.match.params;
    const data = await api.get(`/web/${id_company}/${id_web}`)
    const reponse = await api.get(`/product/${id}`)

    const { color,phone, email } = data.data.website[0]
    const { name,description } = data.data.company[0]
    this.setState({
      color: color,
      phone: phone,
      email: email,
      name: name,
      description: description,
      product: reponse.data
    });
  }
  
  render(){
    return <div />;
  }
  
}

export default Product;