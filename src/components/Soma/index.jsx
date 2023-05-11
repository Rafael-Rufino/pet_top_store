/* eslint-disable react/prop-types */
export function Soma(props) {
  const { a, b } = props;

  return (
    <p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Soma</h5>
          <p className="card-text">
            A soma entre {a} e {b} = {a + b}
          </p>
        </div>
      </div>
    </p>
  );
}
