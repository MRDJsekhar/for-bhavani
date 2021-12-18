import * as React from "react";
import { connect } from "react-redux";
import { loadUsers } from "./actions";

class UsersWithReduxSaga extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }

    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>

            <th>price</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.title}</td>

              <td>{u.price}</td>
              <td>{u.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
  loading: state.reduxSaga.loading,
  error: state.reduxSaga.error,
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersWithReduxSaga);
