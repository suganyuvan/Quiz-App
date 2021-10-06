import React from 'react'

const EditableRows = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Enter a name..."
                    value={editFormData.Name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="Username"
                    required
                    placeholder="Enter a username..."
                    value={editFormData.Username}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="eMail"
                    required
                    placeholder="Enter a e-mail id..."
                    value={editFormData.eMail}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    required
                    placeholder="Enter a phone number..."
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="Website"
                    required
                    placeholder="Enter a website..."
                    value={editFormData.Website}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    )
}

export default EditableRows
