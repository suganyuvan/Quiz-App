import React from 'react'

const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.Name}</td>
            <td>{contact.Username}</td>
            <td>{contact.eMail}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.Website}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={()=> handleDeleteClick(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRows
