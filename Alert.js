import React from 'react'

export default function Alert(props) {
  return (
      props.popalert && <div className={`alert alert-${props.popalert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.popalert.type}</strong>: {props.popalert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
