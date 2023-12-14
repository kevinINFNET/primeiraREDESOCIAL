import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const ListaDeSugestoes = ({ sugestoes }) => (
  <div>
    <h2>Sugestões de Amigos</h2>
    <List>
      {sugestoes.map((sugestao) => (
        <ListItem key={sugestao.id} className="sugestao-item">
          <ListItemAvatar>
            <Avatar src={sugestao.avatar} alt={sugestao.nome} />
          </ListItemAvatar>
          <ListItemText
            primary={sugestao.nome}
            secondary={sugestao.amigosComum && sugestao.amigosComum.length > 0
              ? `Amigos em comum: ${sugestao.amigosComum.join(', ')}`
              : 'Nenhum Amigo em comum'}
            className="sugestao-text"
          />
        </ListItem>
      ))}
    </List>
  </div>
);

export default ListaDeSugestoes;