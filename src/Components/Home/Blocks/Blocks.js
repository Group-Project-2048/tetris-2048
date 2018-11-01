import React, {Component} from 'react';
import '../../../Styles/Blocks.scss';


class Blocks extends Component{

   render(){
       return(
               <div className={`piece-${this.props.numbers}`}>
                   <h2 id='nextitem'>{this.props.numbers}</h2>
               </div>
       )
   }
}

export default Blocks;