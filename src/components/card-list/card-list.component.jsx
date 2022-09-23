// import { Component } from 'react';

import CardContainer from '../card-container/card-container.component';

import './card-list.style.css';

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        // Destructuring by collection all the monster.id, monster.name, monster.email inside a constant
        const { id, name, email } = monster;
        return <CardContainer className='card-container' key={id} src={`https://robohash.org/${id}?set=set2size=180x180`} alt={`monster ${name}`} name={name} email={email} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           // Destructuring by collection all the monster.id, monster.name, monster.email inside a constant
//           const { id, name, email } = monster;
//           return <CardContainer className='card-container' key={id} src={`https://robohash.org/${id}?set=set2size=180x180`} alt={`monster ${name}`} name={name} email={email} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
