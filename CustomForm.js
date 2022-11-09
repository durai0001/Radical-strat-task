import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.setState({
      username: 'Testing'
    });
  }

  onChangeUserName = (e) => this.setState({username: e.target.value})

  onChangePassword = (e) => this.setState({password: e.target.value})

  formOnSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(`Username: ${username}, password: ${password}`);
    this.setState({username: '', password: ''});
  }

  render() {
    const { username, password } = this.state;

    return (this.props.show && 
      <Container style={{textAlign: 'left'}}>
        <h1>React Forms</h1>
        <Row>
          <Form onSubmit={e => this.formOnSubmit(e)}>
            <Form.Group className="mb-10" controlId="formBasicUserName">
              <Col xs={6}>
                <Form.Label>Email address</Form.Label>
              </Col>
              <Col xs={6}>
                <Form.Control  size="lg" type="text" placeholder="Username" value={username} onChange={e => this.onChangeUserName(e)} />
                <Form.Text className="text-muted" />
              </Col>
            </Form.Group>
  
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Col xs={6}>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col xs={6}>
                <Form.Control size="lg" type="password" placeholder="Password" value={password} onChange={e => this.onChangePassword(e)} />
              </Col>
            </Form.Group>
            
            <Col xs={6}>
              <Button variant="primary" type="submit"> Submit </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }  
}


export default CustomForm;