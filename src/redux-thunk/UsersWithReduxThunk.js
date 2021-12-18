import {
  AppBar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import * as React from "react";
import { connect } from "react-redux";
import { loadUsers } from "./actions";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

class UsersWithReduxThunk extends React.Component {
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
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Button
                color="secondary"
                sx={{ p: 1, marginLeft: "auto" }}
                variant="contained"
              >
                <Link to="/grid"> Show Product Grid</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reduxThunk.data,
  loading: state.reduxThunk.loading,
  error: state.reduxThunk.error,
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersWithReduxThunk);
