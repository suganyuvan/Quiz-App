import './App.css';
import { nanoid } from 'nanoid';
import React, { useState, Fragment } from 'react';
import data from "./mock-data.json";
import ReadOnlyRows from './components/ReadOnlyRows';
import EditableRows from './components/EditableRows';

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Username: "",
    eMail: "",
    phoneNumber: "",
    Website: ""
  })

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Username: "",
    eMail: "",
    phoneNumber: "",
    Website: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Username: addFormData.Username,
      eMail: addFormData.eMail,
      phoneNumber: addFormData.phoneNumber,
      Website: addFormData.Website,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Username: editFormData.Username,
      eMail: editFormData.eMail,
      phoneNumber: editFormData.phoneNumber,
      Website: editFormData.Website 
    }

    const newContacts = [...contacts]; 

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Username: contact.Username,
      eMail: contact.eMail,
      phoneNumber: contact.phoneNumber,
      Website: contact.Website,
    }

    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === contactId);

    newContacts.splice(index,1);

    setContacts(newContacts);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>e-Mail</th>
              <th>phone Number</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id
                  ?
                  (<EditableRows
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />)
                  :
                  (<ReadOnlyRows
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />)
                }
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Username"
          required
          placeholder="Enter a username..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="eMail"
          required
          placeholder="Enter a e-mail id..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Website"
          required
          placeholder="Enter a website..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
