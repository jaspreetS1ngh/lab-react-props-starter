import Card from './Card';

function CardList(props) {
  // create an array to store info for the 2 cards here
  const carddata = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' }
  ]

  return (
    <section className="card-list">
      {carddata.map((card)=>(
        <Card title={card.title} content={card.content}/>
      ))}
      
    </section>
  );
}

export default CardList;
