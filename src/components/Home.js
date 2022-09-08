import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CapsuleList from "./CapsuleList";
import NewCapsuleModal from "./NewCapsuleModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    capsules: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCapsules = () => {
    axios.get(API_URL).then(res => this.setState({ capsules: res.data }));
  };
  resetState = () => {
    this.getCapsules();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CapsuleList
              capsules={this.state.capsules}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewCapsuleModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
