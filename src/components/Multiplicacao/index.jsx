/* eslint-disable react/prop-types */
export function Multiplicacao(props) {
  const { a, b } = props;

  return (
    <p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Multiplicação</h5>
          <p className="card-text">
            A multiplicação entre {a} e {b} = {a * b}
          </p>
        </div>
      </div>
    </p>
  );
}
