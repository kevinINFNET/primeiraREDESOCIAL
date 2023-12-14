import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Fade } from '@mui/material';
import { FaThumbsUp, FaShare } from 'react-icons/fa';

const Comentario = ({ comentario }) => (
  <li className="comentario">
    <i className="fas fa-comments comment-icon"></i> {comentario.texto}
  </li>
);

const Publicacao = ({ post }) => {
  const [textoComentario, setTextoComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [likeClicado, setLikeClicado] = useState(false);
  const [compartilharClicado, setCompartilharClicado] = useState(false);

  const likeSpring = useSpring({
    color: likeClicado ? '#007bff' : '#333',
  });

  const compartilharSpring = useSpring({
    color: compartilharClicado ? '#007bff' : '#333',
  });

  const lidarCliqueCurtir = () => {
    setLikeClicado(!likeClicado);
  };

  const lidarCliqueCompartilhar = () => {
    setCompartilharClicado(!compartilharClicado);
  };

      return (
          <Fade in={true} timeout={2500}>
            <section className="publicacao">
              <div className="cartao">
                <div className="conteudo-publicacao">
                  {post.imageSrc && (
                    <img
                      src={post.imageSrc}
                      alt="Publicação"
                      className="imagem-publicacao"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  <h2>{post.titulo}</h2>
                  <p>{post.conteudo}</p>
                  <span className="data-publicacao">{post.data}</span>
                  <span className="autor-publicacao"> Autor: {post.autor}</span>
                  <div className="acoes-publicacao">
                    <span className="curtidas">
                      <i className="fas fa-thumbs-up"></i> {post.curtidas} curtidas
                    </span>
                    <span className="compartilhamentos">
                      <i className="fas fa-share"></i> {post.compartilhamentos} compartilhamentos
                    </span>
                  </div>
                </div>
                <div className="formulario-publicacao">
                  <div className="container-formulario-publicacao">
                    <textarea
                      placeholder="Compartilhe seus pensamentos..."
                      value={textoComentario}
                      onChange={(e) => setTextoComentario(e.target.value)}
                    ></textarea>
                    <button
                      onClick={() => {}}
                      disabled={!textoComentario.trim()}
                    >
                      Postar
                    </button>
                  </div>
                </div>
                <ul className="comentarios">
                  {comentarios.map((comentario) => (
                    <Comentario key={comentario.id} comentario={comentario} />
                  ))}
                </ul>
              </div>
            </section>
          </Fade>
        );
      };

export default Publicacao;
