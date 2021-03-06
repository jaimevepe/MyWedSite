import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name= target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // will prevent page refresh when submission is done.

        this.setState({
            disabled: true,
        });

<<<<<<< HEAD
        axios.post('/api/email', this.state)
=======
<<<<<<< HEAD
        axios.post('http://localhost:3000/api/email', this.state)
=======
        axios.post('/api/email', this.state)
>>>>>>> 9158661... Fnished setting up sendGrid, email wont send
>>>>>>> 28e2390d0cb8b0dd7878df405ebae6c6bff5f739
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                }
            })
            .catch(err => {
                console.log("Error from front: ", err)
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })
        }

    render(){
        return(
            <div style={{marginBottom: '200px'}}>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '800px'}}>

                        <Form.Group >
                            <Form.Label htmlFor="full-name" >Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email" >Email </Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message" >Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}


                    </Form>
                </Content>
            </div>
        );
    }
   
}

export default Contact;