import React, {useContext} from 'react';
import MarkdownContext from '../MarkdownContext'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Logo from '../styles/img/m-d.svg'
import '../styles/MarkdownOutput.scss'
let marked = require('marked');


const MarkdownOutput = (props) => {
      const {markdownResult} = useContext(MarkdownContext);
      const renderer = marked.setOptions ({
            breaks: true,
          }); 
          marked.use({renderer})
    return (

        <Container className="markdown">
            <Row className="mt-4" >
                <Col>
                <Navbar expand='lg' className="rounded justify-content-center" bg="dark" variant="dark">
                    <Navbar.Brand  href="#home">
                    <img
                        alt="markdown output"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Output
                    </Navbar.Brand>
                </Navbar>
            {  console.log("Converted Text: ", markdownResult) }
                    <div className="form-control mt-2" id="preview" dangerouslySetInnerHTML={{__html: marked(markdownResult)}}></div>
                </Col>

            </Row>
        </Container>
    );
}

export default MarkdownOutput;
