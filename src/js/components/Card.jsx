import React from "react";

const Card = (props) => {
  return ( 
    <>
 <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
           <h5 className="card-title">{Card.title}</h5>
           <p className="card-text">{Card.description}</p>
           <a href="#" className="btn btn-primary">{Card.buttonLabel}</a>
       </div>
</div>
</>
)
}



Card.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string
}

ReactDOM.render(
    <Card
      title="Card title"
      description="Some quick example text to build on the card title and make up the bulk of the card's content."
      buttonLabel="Find Out More!"
    //   buttonURL="https://reactjs.org/"
    />,




export default Card;