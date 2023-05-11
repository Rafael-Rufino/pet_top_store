/* eslint-disable react/prop-types */
export function Subtracao(props) {
  const { a, b } = props;

  return (
    <p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Subtração</h5>
          <p className="card-text">
            A subtração entre {a} e {b} = {a - b}
          </p>
        </div>
      </div>
    </p>
  );
}
