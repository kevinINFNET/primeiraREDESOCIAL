import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const ListaDeAmigos = ({ amigos }) => (
  <div>
    <h2>Amigos</h2>
    <List>
      {amigos.map((amigo) => (
        <ListItem key={amigo.id}>
          <ListItemAvatar>
            <Avatar src={amigo.avatar} alt={amigo.nome} />
          </ListItemAvatar>
          <ListItemText
            primary={amigo.nome}
            secondary={`Amigos em comum: ${amigo.amigosComuns}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          />
        </ListItem>
      ))}
    </List>
  </div>
);

export default ListaDeAmigos;
