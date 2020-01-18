import React, {useState} from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ColCopy from "../components/ColCopy";
import Button from "../components/Button";
import SearchForm from "../components/SearchForm";
import friends from "../../src/employees.json";


function App() {
const [inputState, changeState] = useState();
    return (
        <>
                <Jumbotron>
                    <h1>Employee Database</h1>
                </Jumbotron>
            <Container fluid="true">
                <Row className="row d-flex justify-content-between">
                    <ColCopy  size="lg-3"><h1 >Create Employee</h1>
                    <SearchForm></SearchForm>
                    </ColCopy>
                    <Col size="lg-8">
                    <Row className="row bg-dark d-flex justify-content-between"> 
                    <Button color="primary" fluid="true">One</Button>
                    <Button color="danger" fluid="true">Two</Button>
                    <Button color="success" fluid="true">Three</Button>
                    <Button color="warning" fluid="true">Four</Button>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default App;