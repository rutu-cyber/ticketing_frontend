import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const PasswordReset = ({handleOnChange, handleOnResetSubmit, formSwitcher, email, }) =>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-ingo text-center'>Reset Password</h1>
                    <hr/>
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange= {handleOnChange}
                                placeholde='Enter Email'
                                required
                            />
                        </Form.Group>
                    
                        <br/>
                        <Button type='submit'>Reset Password</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#' onClick={() =>formSwitcher('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    );
};

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};