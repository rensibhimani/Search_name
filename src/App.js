import Container from 'react-bootstrap/Container';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Table } from 'react-bootstrap';
import { data } from './data.js';

function App() {
  const [search, setSearch] = useState('')

  console.log(data)
  return (
    <div className="App">
      <Container>
        <h1 className='text-center mt-4'>Search Full Name  </h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Contact' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.full_name.toLowerCase().includes(search);
            }).map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.full_name}</th>
                <th>{item.address}</th>
                <th>{item.email}</th>
                <th>{item.gender}</th>
                <th>{item.phone_number}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
