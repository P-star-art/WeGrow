import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/actions/authActions';
import imgR from '../../../assets/register.svg';
import '../Auth.css';
import './Register.css';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../../redux/actions/errorActions';

function Register({ history }) {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	const error = useSelector(state => state.error.error);
	const [register, setRegister] = useState(false);
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	console.log(error);

	useEffect(() => {
		dispatch(clearErrors());
		if (localStorage.getItem('authToken')) {
			setRegister(true);
			alert('registered');
			history.push('/profile');
		}
	}, [isAuthenticated, history]);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(registerUser(user));
		setUser({
			username: '',
			email: '',
			password: '',
		});
	};

	return (
		<div className="register">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-12 col-sm-12 register_img">
						<img className="register_img" src={imgR} />
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<Card className="text-center">
							<Card.Header className="bg-color">
								<Card.Title>Registration Form</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId="username">
										<Row>
											<Col sm={3}>
												<Form.Label>
													Username
												</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="text"
													value={user.username}
													onChange={handleChange}
													placeholder="Enter Username"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Group controlId="email">
										<Row>
											<Col sm={3}>
												<Form.Label>
													Email address
												</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="email"
													value={user.email}
													onChange={handleChange}
													placeholder="Enter email"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Group controlId="password">
										<Row>
											<Col sm={3}>
												<Form.Label>
													Password
												</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="password"
													value={user.password}
													onChange={handleChange}
													placeholder="Enter Password"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Label className="text-muted">
										Already have an account?
										<Link to="/auth/login">
											<Button
												variant="btn-light"
												size="sm"
											>
												Login
											</Button>
										</Link>
									</Form.Label>
									<br />
									{error && error !== 'No token' && (
										<Alert variant="danger">{error}</Alert>
									)}
									<Button
										variant="btn-light"
										className="bg-color button-color"
										type="submit"
									>
										Register
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
