/* eslint-disable react/prop-types */
export function Contato(props) {
  const { nome, sobrenome, contato, email } = props;

  return (
    <div className="card">
      <h2 className="card-header bg-primary">Contato</h2>
      <div className="card-body">
        <p className="card-text">Nome: {nome}</p>
        <p className="card-text">Sobrenome: {sobrenome}</p>
        <p className="card-text">Contato: {contato}</p>
        <p className="card-text">E-mail: {email}</p>
      </div>
    </div>
  );
}
