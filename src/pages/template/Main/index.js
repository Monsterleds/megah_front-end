import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom'

import { Container, Nav, Grid, Product} from './styles';

class template extends React.Component{
  constructor(){
      super()
      this.state = {
        color: '',
        name: '',
        products: []
      }
  }

    async componentDidMount(){
    const {id_company,id} = this.props.match.params

    
    const response = await api.get(`/web/${id_company}/${id}`)
    const data = await api.get(`/products/${id}`)
    
    
    
    const { color } = response.data.website[0]
    const { name } = response.data.company[0]


    this.setState({
        color: color,
        name: name,
        products: data.data
    })

    
  }
    render(){
        const data = this.state.products
        const {id_company,id} = this.props.match.params
        return(
       <Container>
           <Nav id={this.state.color}>
            <h1>{this.state.name}</h1>
            <ul>
            <Link><strong>Produtos</strong></Link>
            <Link id="sobre">Sobre</Link>
            </ul>
           </Nav>

            <Grid>
                {
                    data.map(product => 
                        
                         <li key={product.id}>
                            <Product>
                                <img alt={product.title} src={'data:image/jpeg;base64,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'}></img>
                                <div>
                                <h1>{product.title}</h1>
                                <div id='exception'>
                                <span><strong>R$ {product.price}</strong></span>
                                <Link to={`/${id_company}/${id}/product/${product.id}`} id={this.state.color}>Comprar</Link>
                                </div>
                                </div>
                            </Product>
                        </li>
                    )
                }
              
            </Grid>

       </Container> 
        )
  }
    
}

export default template;