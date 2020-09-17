import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare, faImage } from '@fortawesome/free-solid-svg-icons';

const PaginaInicio = () => {
  return (
    <Container>
      <main className="row my-4">
        <section className="col-8">
          <div className="d-flex justify-content-between">
            <FontAwesomeIcon
                icon={faImage}
                size="10x"
                className="mx-2"
              />
            <div>
            <h3>EE.UU y China. Férnandez busca un equilibrio, pero el lazo con Pekín se afianza</h3>
            <p>ACTUALIDAD POLÍTICA</p>
            <p>14 de septiembre de 2020</p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <FontAwesomeIcon
                icon={faImage}
                size="10x"
                className="mx-2"
              />
            <div>
            <h3>EE.UU y China. Férnandez busca un equilibrio, pero el lazo con Pekín se afianza</h3>
            <p>ACTUALIDAD POLÍTICA</p>
            <p>14 de septiembre de 2020</p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <FontAwesomeIcon
                icon={faImage}
                size="10x"
                className="mx-2"
              />
            <div>
            <h3>EE.UU y China. Férnandez busca un equilibrio, pero el lazo con Pekín se afianza</h3>
            <p>ACTUALIDAD POLÍTICA</p>
            <p>14 de septiembre de 2020</p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <FontAwesomeIcon
                icon={faImage}
                size="10x"
                className="mx-2"
              />
            <div>
            <h3>EE.UU y China. Férnandez busca un equilibrio, pero el lazo con Pekín se afianza</h3>
            <p>ACTUALIDAD POLÍTICA</p>
            <p>14 de septiembre de 2020</p>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <FontAwesomeIcon
                icon={faImage}
                size="10x"
                className="mx-2"
              />
            <div>
            <h3>EE.UU y China. Férnandez busca un equilibrio, pero el lazo con Pekín se afianza</h3>
            <p>ACTUALIDAD POLÍTICA</p>
            <p>14 de septiembre de 2020</p>
            </div>
          </div>
        </section>

        <section className="col-4 lineaVertical">
          <p>PUBLICIDAD O NOTICIAS DESTACADAS</p>
        </section>
      </main>
    </Container>
  );
};

export default PaginaInicio;