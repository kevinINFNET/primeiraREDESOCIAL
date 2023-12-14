import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Grid, Fade } from '@mui/material';
import Slide from '@mui/material/Slide';
import ListaDeAmigos from './components/ListaDeAmigos.jsx'; 
import ListaDeSugestoes from './components/ListaDeSugestoes.jsx'; 
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';



const Comentario = ({ comentario }) => (
  <li className="comentario">
    <i className="fas fa-comments comment-icon"></i> {comentario.texto}
  </li>
);

Comentario.propTypes = {
  comentario: PropTypes.object.isRequired,
};

const Publicacao = ({ post }) => {
  const [textoComentario, setTextoComentario] = React.useState('');
  const [comentarios, setComentarios] = React.useState([]);

  const lidarComentarioPost = () => {
    const textoTrimmed = textoComentario.trim();
    if (textoTrimmed !== '') {
      setComentarios((comentariosAnteriores) => [
        ...comentariosAnteriores,
        { id: Date.now(), texto: textoTrimmed },
      ]);
      setTextoComentario('');
    }
  };

  return (
    <Fade in={true} timeout={2500}>
      <section className="publicacao">
        <div className="cartao">
          <div className="video-publicacao">
            {post.videoSrc && (
              <ReactPlayer url={post.videoSrc} controls />
            )}
          </div>
          <div className="conteudo-publicacao">
            {post.imageSrc && (
              <img src={post.imageSrc} alt="Publicação" className="imagem-publicacao" />
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
                onClick={lidarComentarioPost}
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

Publicacao.propTypes = {
  post: PropTypes.object.isRequired,
};

const Amigo = ({ amigo }) => (
  <Slide direction="up" in={true} timeout={500}>
    <div className="container-amigo">
      <img
        className="avatar-amigo imagem-amigo"
        src={amigo.avatar}
        alt={amigo.nome}
      />
      <p className="nome-amigo">{amigo.nome}</p>
    </div>
  </Slide>
);

Amigo.propTypes = {
  amigo: PropTypes.object.isRequired,
};

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [textoComentario, setTextoComentario] = React.useState('');

  const lidarComentarioApp = () => {
    if (textoComentario.trim() !== '') {
      setComentarios([...comentarios, { id: Date.now(), texto: textoComentario }]);
      setTextoComentario('');
    }
  };

  const todasPublicacoes = [
    {
      id: 1,
      titulo: 'Valorant: Mergulhando no Mundo Competitivo',
      conteudo: 'Valorant, o aclamado jogo de tiro tático da Riot Games, tem conquistado o coração de milhões de jogadores ao redor do mundo desde o seu lançamento. Com uma mistura envolvente de táticas, estratégia e habilidades únicas dos personagens, Valorant oferece uma experiência de jogo competitiva que desafia até os jogadores mais habilidosos.',
      data: '25 de Novembro de 2023',
      autor: 'Wesley Barbosa',
      curtidas: 100,
      compartilhamentos: 50,
      comentarios: [],
      imageSrc: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637524166dc/621853fd6be1e66143a66db2/022822_TakeoverCap_Banner.jpg?auto=webp&disable=upscale&height=549',
    },
    {
      id: 2,
      titulo: 'O Futuro das Inteligências Artificiais2',
      conteudo: 'As Inteligências Artificiais (IA) têm desempenhado um papel cada vez mais crucial em diversas áreas, desde automação industrial até assistentes virtuais. O constante avanço da tecnologia promete transformar radicalmente a forma como interagimos com o mundo digital. À medida que nos aproximamos do futuro, as IA continuarão a evoluir, apresentando novas possibilidades e desafios para a sociedade.',
      data: '23 de Novembro de 2023',
      autor: 'Graciele Nunes',
      curtidas: 50,
      compartilhamentos: 20,
      comentarios: [],
      imageSrc: 'https://cdn.pixabay.com/photo/2020/05/15/15/54/artificial-intelligence-5174066_1280.jpg',
    },
    {
      id: 3,
      titulo: 'Loki: o fim de uma era',
      conteudo: 'Loki foi tipo um passeio selvagem pelo tempo com o Deus da Trapaça. O negócio é cheio de viagens temporais, versões alternativas, e uma química maluca entre Loki e Sylvie. A série revela um lado mais profundo do Loki e deixa a gente se perguntando quem ele é de verdade. No final, rolou um plot twist com o Kang alternativo, e Sylvie fez a ousadia de acabar com ele, bagunçando o multiverso. Loki, que não tem nada a ver com isso, se vê num mundo louco e o bagulho ficou sério. Agora, a gente tá só na expectativa pra ver como o Loki vai se virar nesse novo cenário maluco do MCU. Loki sempre surpreendendo, né? Estou tão hypada que decidi compartilhar esse edit com vocês, que resume bem como foi essa fantástica final season de Loki.',
      data: '11 de Novembro de 2023',
      autor: 'Júlia Felix',
      curtidas: 27,
      compartilhamentos: 6,
      comentarios: [],
      imageSrc: 'https://images7.alphacoders.com/132/1326003.jpeg',
    }

  ];

  const todasListasDeAmigos = [
    {
      id: 3,
      nome: 'Graciele Nunes',
      avatar:
        'https://media.istockphoto.com/id/1289220949/pt/foto/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=2048x2048&w=is&k=20&c=v0MMOpgpUV91a3kpV03IU3dC8AtsyPFV8TIFoh2AG5M=',
      amigosComuns: 1, 
    },
    {
      id: 4,
      nome: 'Wesley Barbosa',
      avatar:
        'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg',
      amigosComuns: 1, 
    },
  ];

  const todasListasDeSugestoes = [
    {
      id: 1,
      nome: 'João Gilberto',
      avatar: 'https://cdn.pixabay.com/photo/2015/03/11/01/21/yoda-667955_1280.jpg',
      amigosComum: ['Wesley Barbosa'],
    },
    {
      id: 2,
      nome: 'Julia Felix',
      avatar:
        'https://cdn.pixabay.com/photo/2017/09/07/13/58/woman-2725337_1280.jpg',
    },
    {
      id: 3,
      nome: 'Brenno Silva',
      avatar:
        'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg',
    },
    {
      id: 4,
      nome: 'Francisco Iago',
      avatar:
        'https://media.istockphoto.com/id/1451138342/pt/foto/construction-mason-worker-bricklayer-installing-red-brick-with-trowel-putty-knife-outdoors.jpg?s=2048x2048&w=is&k=20&c=Jwj4etfpKH-HhQ3SOqPgewHAs39_c7ZxRYZN6AYb6_M=',

    },
    {
      id: 5,
      nome: 'NetComLTDA',
      avatar:
        'https://cdn.pixabay.com/photo/2018/04/27/11/13/group-3354365_1280.jpg',
      },

  ];

return (
  <Container component="main" maxWidth={false} className="social-app">
    <CssBaseline />
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Minha Rede Social</Typography>
        <div className="navigation-bar">
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#perfil">Perfil</a>
            </li>
            <li>
              <a href="#amigos">Amigos</a>
            </li>
            <li>
              <a href="#configuracoes">Configurações</a>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
    <Grid container spacing={3} className="container">
      <Grid item xs={12} md={8}>
        <main className="main">
          <h2>Publicações</h2>
          <div className="grid-container">
            {todasPublicacoes.map((publicacao) => (
              <Publicacao key={publicacao.id} post={publicacao} />
            ))}
          </div>
        </main>
      </Grid>
      <Grid item xs={12} md={4}>
        <aside className="sidebar">
          <ListaDeAmigos amigos={todasListasDeAmigos} />
        </aside>
        <aside className="suggestions">
          <ListaDeSugestoes sugestoes={todasListasDeSugestoes} />
        </aside>
      </Grid>
    </Grid>
  </Container>
);
};

export default App;