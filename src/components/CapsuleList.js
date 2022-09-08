import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCapsuleModal from "./NewCapsuleModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class CapsuleList extends Component {
  render() {
    const capsules = this.props.capsules;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Libelle</th>
            <th>Forme</th>
            <th>Couleur</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!capsules || capsules.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            capsules.map(capsule => (
              <tr key={capsule.pk}>
                <td>{capsule.libelle}</td>
                <td>{capsule.forme}</td>
                <td>{capsule.couleur}</td>
                <td>{capsule.description}</td>
                <td align="center">
                  <NewCapsuleModal
                    create={false}
                    capsule={capsule}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={capsule.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CapsuleList;