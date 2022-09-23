// import { Component } from 'react';

import './card-container.style.css';

const CardContainer = (props) => {
  const { className, id, email, src, name } = props;
  return (
    <div className={className} key={id}>
      <img src={src} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class CardContainer extends Component {
//   render() {
//     const { className, id, email, src, name } = this.props;
//     return (
//       <div className={className} key={id}>
//         <img src={src} alt={`monster ${name}`} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default CardContainer;
