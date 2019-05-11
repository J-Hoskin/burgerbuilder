import React, {Component} from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad: 1,
            bacon: 1,
            chese: 2,
            meat: 2
        }
    }
    render(){
        return(
            <Auxiliry>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build controls</div>
            </Auxiliry>
        );
    }
}

export default BurgerBuilder;