// import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

// function NoMatch() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1 className="text-center">404 Page Not Found</h1>
//             <h1 className="text-center">

//             </h1>
//           </Jumbotron>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default NoMatch;

import React, { Fragment } from 'react';

import './styles/noMatch.css';

const NoMatch = () => {

    return (
        <Fragment>
            <p id="noMatchTxt">
                NO MATCH
                <span id="emoji" role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
                </span>
            </p>
        </Fragment>
    )

}
export default NoMatch;