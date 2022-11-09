import React, {Component} from 'react'
import { Alert, Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';

class FetchUrlResponse extends Component {
    constructor (props){
        super(props);
        this.state = {
            url: "",
            method: '',
            body:''
          };
    }
    componentDidMount() {
        this.setState({
          url: ''
        });
    }
    onChangeMethod = (e) => this.setState({method: e.target.value})
    onChangeUrl = (e) => this.setState({url: e.target.value})
    onChangebody = (e) => this.setState({body:e.target.value})

    formOnSubmit = e => {
        e.preventDefault();
        const { url, method, body } = this.state;
        if(url) {
            this.fetchData(method, url, body);
        }
    }

    fetchData = async(method="GET", url="", body={}) => {
        try {
            const payload = { method, url };
            if(method === 'POST' || method === 'PUT') {
                payload.data = body;
            }
            const response = await axios(payload);
            const data = await response?.data;
            this.setState({
                apiResponse: data,
                apiStatus: 'Success'
            });
        } catch (error) {
            console.log('e', error);
            this.setState({
                apiResponse: error.message,
                apiStatus: 'Error'
            });
        }
    };

    render (){
        const { body, method, url, apiResponse, apiStatus } = this.state;
        console.log(method);
        return(
            <Container style={{textAlign: 'left'}}>
                <h1>API Test for Backend</h1>
                <Form onSubmit={e => this.formOnSubmit(e)}>
                <Form.Group className="mb-2" controlId="formBasicUrl">
                <Col xs={12}>
                    <Form.Control size="lg" type="url" placeholder="Url" value={url} onChange={e => this.onChangeUrl(e)}/>
                </Col>
                <Col xs={12}>
                    <Form.Check 
                        type='radio'
                        value = "GET"
                        name="method"
                        inline
                        onChange= {e=>this.onChangeMethod(e)}
                        id={`GET`}
                        label={`GET`}
                    />
                    <Form.Check 
                        type='radio'
                        inline
                        name="method"
                        value = "POST"
                        onChange= {e=>this.onChangeMethod(e)}
                        id={`POST`}
                        label={`POST`}
                    />
                    <Form.Check 
                        type='radio'
                        inline
                        name="method"
                        value = "PUT"
                        onChange= {e=>this.onChangeMethod(e)}
                        id={`PUT`}
                        label={`PUT`}
                    />
                    <Form.Check 
                        type='radio'
                        inline
                        name="method"
                        value ="DELETE"
                        onChange= {e=>this.onChangeMethod(e)}
                        id={`DELETE`}
                        label={`DELETE`}
                    />
                </Col>
                {(method === 'POST' || method === 'PUT') && <Col xs={12}>
                    <Form.Control type="text"  size="lg" placeholder="Please Enter the Text" value={body} onChange={e => this.onChangebody(e)} />
                </Col>}
                <Col xs={6}>
                    <Button variant="danger" type="submit"> Test REST API </Button>
                </Col>
                </Form.Group>
                </Form>

                <Container>
                    {apiStatus && <h3>Response Display</h3>}
                    <Row>
                        {apiStatus === 'Success' && <Col xs={6}>
                            <Alert variant="success"> 
                                Your API is success 
                                <div>
                                    {JSON.stringify(apiResponse)}
                                </div>
                            </Alert>
                        </Col>}
                        {apiStatus === 'Error' && <Col xs={6}>
                            <Alert varient = "success">
                                <h4>Error: </h4>
                                <div>
                                    {JSON.stringify(apiResponse)}
                                </div>
                            </Alert>
                        </Col>}
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default FetchUrlResponse;