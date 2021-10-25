function Form() {
  return (
    <div className="mb-5">
      <h2 className="mb-3">Add post</h2>
      <div className="mb-3">
        <textarea
          className="form-control mb-3"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" className="btn btn-dark">
          Send post
        </button>
      </div>
    </div>
  )
}

export default Form
