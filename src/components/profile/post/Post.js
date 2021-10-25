import React from 'react'

function Post() {
  const [text, setText] = React.useState('Привет мир')

  function handleClick() {
    setText('Покедаво!')
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 class="card-subtitle mb-2 text-muted">Alexey Orlov</h5>
        <p onClick={handleClick} className="card-text">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Post
