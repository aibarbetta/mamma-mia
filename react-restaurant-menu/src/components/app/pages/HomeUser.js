import React, {Component} from 'react';
import ButtonBases from './ButtonBases';
import MenuAppBar from './MenuAppBar';

/* TODO NOE. Tal vez este no es el nombre mas apropiado, porque deberia ser un Home para ambos
Hay que cambiarlo después para que si se loguea como admin, sea el mismo home pero con las posibilidades
de editar y demas*/
export default class HomeUser extends Component {
	constructor(props) {
	  console.log("cargue App");
	  super(props)
	  this.state = {
		
		
		//isAdministrator: this.props.isAdministrator
	  }
	  console.log("EN HOME", this.props)
	}

//class HomeUser extends Component {
	render()  {
		return (
			<div>
				<MenuAppBar></MenuAppBar>
        <ButtonBases {...this.state}></ButtonBases>
			</div>
		);
	}
}

//export default HomeUser;