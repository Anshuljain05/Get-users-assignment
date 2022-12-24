import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './App.css';
import UserCard from './components/UserCard';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    getUsers();
  }
  
  const getUsers = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const data = await axios
      .get('https://reqres.in/api/users?page=1')
      .then(res => {
        // adding timeout to show spinner effect
        setTimeout(() => {
          setUsers(res.data.data);
          setLoading(false);
        },1000)
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Advertyzement</Navbar.Brand>
          <Button variant="primary" disabled={loading} onClick={!loading ? handleClick : null}>{loading ? 'Loading…' : 'Get Users'}</Button>
        </Container>
      </Navbar>
      <div className="wrapper">
        {loading ? <Spinner animation="border" variant="primary" /> : 
          users && users.map((user, index) => (
            <UserCard
              avatar={user.avatar}
              name={`${user.first_name} ${user.last_name}`}
              email={user.email}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
