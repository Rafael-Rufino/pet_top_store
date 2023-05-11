export const Tablet = () => {
  const valorModetadorDeCachorro = (50 / 100) * 20;
  const valorArranhador = (50 / 100) * 9.9;
  const valorOsso = (50 / 100) * 4.5;
  return (
    <table className="table table-striped">
      <tr>
        <th>Produto</th>
        <th>Valor</th>
        <th>Ações</th>
      </tr>
      <tr>
        <td>Mordedor para cachorro</td>
        <td>{`${valorModetadorDeCachorro.toFixed(2)}`}</td>
        <td>
          <a href="#" className="btn btn-primary bg-primary ">
            Comprar
          </a>
        </td>
      </tr>
      <tr>
        <td>Arranhador</td>
        <td>{`${valorArranhador.toFixed(2)}`}</td>
        <td>
          <a href="#" className="btn btn-primary bg-primary">
            Comprar
          </a>
        </td>
      </tr>
      <tr>
        <td>Osso</td>
        <td>{`${valorOsso.toFixed(2)}`}</td>
        <td>
          <a href="#" className="btn btn-primary bg-primary">
            Comprar
          </a>
        </td>
      </tr>
    </table>
  );
};
