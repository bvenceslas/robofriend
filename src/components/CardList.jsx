import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key={i}
                            id={robot.id} 
                            name={robot.name} 
                            username={robot.username} 
                            email={robot.email}
                        />
                    )
                })
            }            
            
      </div>
    )
}

export default CardList;