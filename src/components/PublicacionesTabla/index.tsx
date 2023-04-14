

const PublicacionesTabla = () => {
  return (
    <>
    <div className="container-sm">
      <div className="col ">
        <div className="col mt-4 mb-3">
          <h3>Publicaciones</h3>
        </div>
        <div className="col-8">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
      
    </>
  )
}

export { PublicacionesTabla }