import React, { useContext } from 'react'
import MarkdownContext from '../MarkdownContext'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import '../styles/MarkdownInput.scss'
import Logo from '../styles/img/m-d.svg'

const MarkdownInput = () => {
    const {setmarkdownResult, markdownResult} = useContext(MarkdownContext);
    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        setmarkdownResult(newValue);
    }

    return (
            <Container className="inputmark">
                <Row className="mt-4">
                    <Col>
                    <Navbar expand='lg' className="rounded justify-content-center" bg="dark" variant="dark">
                        <Navbar.Brand  href="#home">
                        <img
                            alt="markdown input"
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            Input
                        </Navbar.Brand>
                    </Navbar>
                        <textarea id="editor" className="mt-2 form-control rounded" defaultValue={markdownResult} onChange={onInputChange}></textarea>
                    </Col>
                </Row>
            </Container>
    );
}

export default MarkdownInput;
