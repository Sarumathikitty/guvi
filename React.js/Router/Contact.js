import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }
  componentDidMount() {
    fetch(" http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>        
          {this.state.contactlist.map((contact, index) => (          
              <table>
                <tr  key={index}>
                  <th>Name</th>
                  <th>Mobile number</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{contact.name.first} {contact.name.last}</td>
                  <td>{contact.mobile}</td>
                  <td>  {contact.email}</td>
                </tr>
              </table>        
          ))}        
      </div>
    );
  }
}

export default Contact;
