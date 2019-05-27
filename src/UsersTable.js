import React ,  {Component} from  'react';

const TableHeader  = ()=>{
  return(<thead><tr class="row100 head">
      <th>Usuario</th>
	  <th>Password</th>
	  <th>Nombre</th>
	  <th>Edad</th>
	  <th>Genero</th>
	  <th>Correo</th>
      <th>Telefono</th>
      <th>Foto</th>
    </tr></thead>);
}

const TableBody =  props =>{
  const rows = props.resultsData.map( (row, index) =>{

    return(
    <tr key={index}>
        <td>{row.username}</td>
        <td>{row.password}</td>
        <td>{row.nombre}</td>
        <td>{row.edad}</td>
        <td>{row.genero}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
        <td><img src={row.pict} alt=""></img></td>
    </tr>
      );
  } );
  return(<tbody>{rows}</tbody>);
}

class UsersTable extends Component{
	
  render(){
      const {results} = this.props

      return(
        <table>
          <TableHeader class="table100-head"/>
          <TableBody resultsData={results} class="row100 body" />
        </table>);
  }
}

export default UsersTable
