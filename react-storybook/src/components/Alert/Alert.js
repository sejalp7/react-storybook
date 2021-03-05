import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';


function Alert({ children}) {
    const [show, toggleShow] = useState(true);
    return (
        <Toast show={show} onClose={() => toggleShow(!show)}>
        <Toast.Header>
          <strong className="mr-auto">Alert Box Header</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    )
}

export default Alert
