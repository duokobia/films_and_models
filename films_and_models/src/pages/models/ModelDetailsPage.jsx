import React from 'react';


function ModelDetailsPage() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                Card showing model' name. 
            </div>
            <div className="col-4">
                Details description:
                <ul>
                    <li>Hair color</li>
                    <li>Skin color</li>
                    <li>Eye color </li>
                    <li>Height</li>
                    <li>Weight</li>
                </ul>
            </div>
            <div className="row">
                <h2>Films featured in:</h2>
                <span>Planet 1</span><span>Planet 2</span><span>Planet 3</span>
                <h3>You can click on the films to see other models in the films</h3>
            </div>
        </div>
        Cards containing models details.
    </div>
  )
}

export default ModelDetailsPage