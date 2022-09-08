import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewCapsuleForm extends React.Component {
  state = {
    pk: 0,
    libelle: "",
    forme: "",
    couleur: "",
    description: ""
  };

  componentDidMount() {
    if (this.props.capsule) {
      const { pk, libelle, forme, couleur, description } = this.props.capsule;
      this.setState({ pk, libelle, forme, couleur, description });
    }
  }

  onChange = e => {
    this.setState({ [e.target.libelle]: e.target.value });
  };

  createCapsule = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCapsule = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.capsule ? this.editCapsule : this.createCapsule}>
        <FormGroup>
          <Label for="libelle">Libelle:</Label>
          <Input
            type="text"
            name="libelle"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.libelle)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="forme">Forme:</Label>
          <Input
            type="forme"
            name="forme"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.forme)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="couleur">Couleur:</Label>
          <Input
            type="text"
            name="couleur"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.couleur)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button>Valider</Button>
      </Form>
    );
  }
}

export default NewCapsuleForm;