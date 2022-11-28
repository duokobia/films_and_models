import React from 'react';
import Card from 'react-bootstrap/Card';

const BsFilmCard = () => {
  return (
            <div className="container-fluid col-xs-12 col-lg-8 mt-5 ">
                    <div className="row ms-2"> 
                        <div className="col-xs-12 col-lg-6 mt-5">
                            <Card className="text-bg-light">
                                <Card.Body className="mt-5 mb-4 mx-auto">
                                <Card.Title  className="mb-4"><h2>Luke Skywalker's features</h2></Card.Title>
                                <Card.Text className="mb-4" >
                                    Physical features of Luke Skywalker. 
                                </Card.Text>
                                <Card.Subtitle className="mb-3 text-muted"><span>Birth Year:</span><span className="ms-3">Prop 1</span></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Gender:</span><span className="ms-3">Prop 2</span></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Height:</span><span className="ms-3">Prop 3</span></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Mass:</span><span className="ms-3">Prop 4</span></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Hair Color:</span><span className="ms-3">Prop 5</span></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Skin Color:</span><span className="ms-3">Prop 6</span></Card.Subtitle>
                                <Card.Subtitle className="mb-5 text-muted"><span>Eye Color:</span><span className="ms-3">Prop 7</span></Card.Subtitle>
                                <Card.Link href="#">Back to models' list</Card.Link>
                                <Card.Link href="#" className="ms-5">Films model featured in.</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xs-12 col-lg-6 mt-5">
                            <Card className="text-bg-light">
                                <Card.Body className="mt-5 mb-4 mx-auto">
                                <Card.Title  className="mb-4"><h2>Luke Skywalker's films</h2></Card.Title>
                                <Card.Text className="mb-4" >
                                    Films Luke Skywalker featured in: 
                                </Card.Text>
                                <span></span><span></span>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Heros of the WarHead.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Begin the War Soon.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">End of the Third WorldWar.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Alice of the Jungle.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Aladin and the forty Gangs.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-3 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Leaving the South Sea Lonely.</span></a></Card.Subtitle>
                                <Card.Subtitle className="mb-5 text-muted"><span>Film Title:</span><a href='#'><span className="ms-3">Wars Without End.</span></a></Card.Subtitle>
                                <Card.Link href="#">Back to films' list</Card.Link>
                                <Card.Link href="#" className="ms-5">Films model featured in.</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                </div>
            
            </div>

  )
}

export default BsFilmCard;