import React from "react";
// import Header from '../common/Header';
// import Footer from '../common/Footer';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare, faImage } from '@fortawesome/free-solid-svg-icons';

const PaginaNoticia = () => {
    return (
        <Container>
          <section className="borde mt-4">
          {/* <Header></Header> */}
          <h1>Titulo de la noticia</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum labore cum reprehenderit enim nihil, quasi aspernatur optio veniam eveniet modi accusantium nobis et unde facilis doloremque nemo magni? Temporibus debitis saepe aut deleniti exercitationem sapiente? Accusamus natus consequatur distinctio quasi dicta laboriosam a, enim amet facilis id nobis facere?</p>
          {/* <Footer></Footer> */}
        </section>

        <section className=" my-3 d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p>Por Mariela Perez</p>
            <div className="d-flex justify-content-between">
              <p>Fecha</p>
              <span class="badge badge-pill badge-success h-50">Categoria</span>
            </div>
          </div>

          <div>
          <FontAwesomeIcon
              icon={faImage}
              size="10x"
              className="mx-2"
            />
          </div>
          
          <div>
          <FontAwesomeIcon
              icon={faThumbsUp}
              size="1x"
              className="mx-2"
            />
            <FontAwesomeIcon
              icon={faShare}
              size="1x"
            />
          </div>
        </section>
        
        <section className="borde mb-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam in facilis, impedit culpa corporis exercitationem obcaecati blanditiis sint! Alias fuga molestiae exercitationem sit eos in facere, ad maxime enim vel necessitatibus esse atque dicta fugiat, consectetur totam modi pariatur at quam voluptas quo quisquam? Quaerat enim mollitia error adipisci. Aut autem molestiae quae nemo reprehenderit veritatis ipsum est expedita perferendis dolores laudantium omnis nostrum, obcaecati aperiam corrupti accusantium, at numquam voluptas, quam recusandae dolorum repellendus sed ullam quisquam? Laboriosam ex saepe officiis ipsa architecto corrupti perferendis, facere ratione magni ab inventore. Doloremque, fuga quaerat deleniti unde aliquid placeat quod debitis?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam in facilis, impedit culpa corporis exercitationem obcaecati blanditiis sint! Alias fuga molestiae exercitationem sit eos in facere, ad maxime enim vel necessitatibus esse atque dicta fugiat, consectetur totam modi pariatur at quam voluptas quo quisquam? Quaerat enim mollitia error adipisci. Aut autem molestiae quae nemo reprehenderit veritatis ipsum est expedita perferendis dolores laudantium omnis nostrum, obcaecati aperiam corrupti accusantium, at numquam voluptas, quam recusandae dolorum repellendus sed ullam quisquam? Laboriosam ex saepe officiis ipsa architecto corrupti perferendis, facere ratione magni ab inventore. Doloremque, fuga quaerat deleniti unde aliquid placeat quod debitis?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam in facilis, impedit culpa corporis exercitationem obcaecati blanditiis sint! Alias fuga molestiae exercitationem sit eos in facere, ad maxime enim vel necessitatibus esse atque dicta fugiat, consectetur totam modi pariatur at quam voluptas quo quisquam? Quaerat enim mollitia error adipisci. Aut autem molestiae quae nemo reprehenderit veritatis ipsum est expedita perferendis dolores laudantium omnis nostrum, obcaecati aperiam corrupti accusantium, at numquam voluptas, quam recusandae dolorum repellendus sed ullam quisquam? Laboriosam ex saepe officiis ipsa architecto corrupti perferendis, facere ratione magni ab inventore. Doloremque, fuga quaerat deleniti unde aliquid placeat quod debitis?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam in facilis, impedit culpa corporis exercitationem obcaecati blanditiis sint! Alias fuga molestiae exercitationem sit eos in facere, ad maxime enim vel necessitatibus esse atque dicta fugiat, consectetur totam modi pariatur at quam voluptas quo quisquam? Quaerat enim mollitia error adipisci. Aut autem molestiae quae nemo reprehenderit veritatis ipsum est expedita perferendis dolores laudantium omnis nostrum, obcaecati aperiam corrupti accusantium, at numquam voluptas, quam recusandae dolorum repellendus sed ullam quisquam? Laboriosam ex saepe officiis ipsa architecto corrupti perferendis, facere ratione magni ab inventore. Doloremque, fuga quaerat deleniti unde aliquid placeat quod debitis?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam in facilis, impedit culpa corporis exercitationem obcaecati blanditiis sint! Alias fuga molestiae exercitationem sit eos in facere, ad maxime enim vel necessitatibus esse atque dicta fugiat, consectetur totam modi pariatur at quam voluptas quo quisquam? Quaerat enim mollitia error adipisci. Aut autem molestiae quae nemo reprehenderit veritatis ipsum est expedita perferendis dolores laudantium omnis nostrum, obcaecati aperiam corrupti accusantium, at numquam voluptas, quam recusandae dolorum repellendus sed ullam quisquam? Laboriosam ex saepe officiis ipsa architecto corrupti perferendis, facere ratione magni ab inventore. Doloremque, fuga quaerat deleniti unde aliquid placeat quod debitis?</p>

        </section>
        </Container>
    );
  };
  
export default PaginaNoticia;