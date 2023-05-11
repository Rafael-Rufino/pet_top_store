/* eslint-disable react/prop-types */
export function Divisao(props) {
  const { a, b } = props;

  return (
    <p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Divisão</h5>
          <p className="card-text">
            A divisão entre {a} e {b} = {a / b}
          </p>
        </div>
      </div>
    </p>
  );
}
