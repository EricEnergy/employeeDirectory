import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ColCopy from "../components/ColCopy";
import Button from "../components/Button";
import SearchForm from "../components/SearchForm";
import Employees from "../employees.json"
import compare from "../components/functions/compare";
import compareOccupation from "../components/functions/compareOccupation";
import compareLocation from "../components/functions/comparelocation";
import TableHead from "../components/TableHead/index";


export default function App() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeOccupation, setEmployeeOccupation] = useState('');
    const [employeeLocation, setEmployeeLocation] = useState('');
    const [employeeSex, setEmployeeSex] = useState('');

    
    function setEmployeeInfo(value) {
        setEmployeeName(value.map(o => <p key={o.id}>{o.name}</p>))
        setEmployeeId(value.map(o => <p key={o.id}>{o.id}</p>))
        setEmployeeOccupation(value.map(o => <p key={o.id}>{o.occupation}</p>))
        setEmployeeLocation(value.map(o => <p key={o.id}>{o.location}</p>))
        setEmployeeSex(value.map(o => <p key={o.id}>{o.sex}</p>))
    }

    useEffect(() => {
        setEmployeeInfo(Employees);
      }, []);

    function loadAllEmployee() {
        setEmployeeInfo(Employees);
    }

    function filterByGender(value) {
        let gender = Employees.filter(o => o.color === value);
        setEmployeeInfo(gender);
    }

 
    function sortByLocation() {
        let newListLocation = Employees.sort(compareLocation);
        setEmployeeInfo(newListLocation);
    }

    function sortByName() {
       let newListName = Employees.sort(compare);
       setEmployeeInfo(newListName);
    }


    function sortByOccupation() {
        let newListOccupation = Employees.sort(compareOccupation);
        setEmployeeInfo(newListOccupation);
    }

    return (
        <>
            <Jumbotron>
                <h1>Employee Database</h1>
            </Jumbotron>
            <Container fluid="true">
                <Row className="row d-flex justify-content-between">
                    <ColCopy size="lg-3"><h1 >Create Employee</h1>
                        <SearchForm></SearchForm>
                    </ColCopy>
                    <Col size="lg-8">
                        <Row className="row bg-dark d-flex justify-content-between">
                            <Button color="primary" fluid="true" onClick={e => loadAllEmployee()}> Show All </Button>
                            <Button color="danger" fluid="true" onClick={e => sortByName()}> Sort By Name </Button>
                            <Button color="success" fluid="true" onClick={e => sortByOccupation()}> Sort By Occupation </Button>
                            <Button color="warning" fluid="true" onClick={e => filterByGender()}> Sort By Location </Button>
                            <table className="table table-dark table-bordered">
            <TableHead />
            <tbody>
                <tr>
                    <th scope="col" key={employeeId}>{employeeId}</th>
                    <th scope="col">{employeeName}</th>
                    <th scope="col">{employeeOccupation}</th>
                    <th scope="col">{employeeLocation}</th>
                    <th scope="col">{employeeSex}</th>
                </tr>
            </tbody>
            </table>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

