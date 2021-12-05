import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import {connect} from 'react-redux'

//acciones
import {getBusqueda,clearSearch} from '../redux/actions/moviesActions'

const Contenedor = styled.div`
    position:fixed;
    width:100%;
    height:75px;
    background:rgba(0,0,0,0.5);
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    >h3{
        margin-left:20px;
    }
`
const Fecha = styled.div`
    margin-right: 50px;
    font-weight: bold;
    font-size: 18px;
    border: 2px solid #fff;
    background: black;
`

class Header extends React.Component{
    state ={
        search_text:""
    }
    onChangeSearch = evt =>{
        const {value} = evt.target
        if(value){
            this.props.getBusqueda(value)
            this.setState({
                search_text:value
            })

        }else{
            
            this.onClearTextSearch()
        }
        
        
    }
    onClearTextSearch = ()=>{
        this.setState({
            search_text:""
        })
        this.props.clearSearch()
    }
    render(){
        return(
            <Contenedor>
            <h3>Esta es mi Pelicula</h3>
            {this.props.path === "/" && 
            <Search 
                onChangeSearch = {this.onChangeSearch}
                clear={this.onClearTextSearch}
                search_text={this.state.search_text}
                />}
            <Fecha>{this.props.test.fecha.toLocaleString()}</Fecha>
        </Contenedor>
        );
    }
}
function mapStateToProps({test}) {
    return{test}
}

export default connect(mapStateToProps,{
    getBusqueda,
    clearSearch
})(Header)