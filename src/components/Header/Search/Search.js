import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (

        <form className="form-inline my-2 my-lg-0">
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </form>

    );
  }
}

export default Search;
