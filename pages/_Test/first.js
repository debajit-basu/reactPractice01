import React, { Component } from 'react'
import { Link } from "../../routes";
import { Label, Card, CardBody, Popover, PopoverHeader, PopoverBody, CardTitle, Button, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import $ from 'jquery';
import "./_Style/Auth.css";
import _ from 'lodash';

class Test extends Component {

	constructor(props) {
		super(props);
		this.state = {}
		;
	}

	componentDidMount = () => {

	}


	render() {
		return (
			<h1>Welcome to  Next JS</h1>
		)
	}
}

export default Test;
