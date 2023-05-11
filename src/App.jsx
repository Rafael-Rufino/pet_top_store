import { Divisao } from "./components/Divisao";
import { Multiplicacao } from "./components/Multiplicacao";
import { Soma } from "./components/Soma";
import { Subtracao } from "./components/Subtracao";
import { Tablet } from "./components/Tablet";
import { Contato } from "./components/contato";

function App() {
  return (
    <>
      <h1>Pet Top Store</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/promocoes/abril">Promoção de abril</a>
          </div>
          <div className="col">
            <a href="/promocoes/mordedor">Compre agora e ganho um mordedor</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/promocoes/indicacao">Indique um amigo e ganhe 5 reais</a>
          </div>
          <div className="col">
            <a href="/promocoes/osso">Compre um mordedor e ganhe um Osso</a>
          </div>
        </div>

        <Tablet />

        <div>
          <h1>Meus Contatos</h1>
          <hr />
          <Contato
            nome="João"
            sobrenome="Silva"
            contato="(11) 99999-9999"
            email="joao.silva@email.com"
          />
          <Contato
            nome="Maria"
            sobrenome="Souza"
            contato="(21) 88888-8888"
            email="maria.souza@email.com"
          />
          <Contato
            nome="Pedro"
            sobrenome="Ferreira"
            contato="(31) 77777-7777"
            email="pedro.ferreira@email.com"
          />
          <Contato
            nome="Ana"
            sobrenome="Lima"
            contato="(41) 66666-6666"
            email="ana.lima@email.com"
          />
          <Contato
            nome="Carlos"
            sobrenome="Santos"
            contato="(51) 55555-5555"
            email="carlos.santos@email.com"
          />
        </div>

        <div>
          <h2>Operações matematica</h2>
          <Soma a={2} b={3} />
          <Subtracao a={10} b={5} />
          <Multiplicacao a={4} b={6} />
          <Divisao a={20} b={4} />
        </div>
      </div>
    </>
  );
}

export default App;
