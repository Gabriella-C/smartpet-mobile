import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import {
  Container,
  Left,
  SymbleEnterprise,
  Info,
  Name,
  Right,
  Adicionais,
  RamoAtuacao,
  TempoDeEntrega,
  ValorFrete,
} from './styles';

function Avaliado({ item, ...rest }) {
  return (
    <Container {...rest}>
      <Left>
        <SymbleEnterprise
          color={item.item.color}
          source={{
            uri: item.item.url,
          }}
        />
        <Info>
          <Name>{item.item.name}</Name>
          <Adicionais>
            <RamoAtuacao>
              <TempoDeEntrega>{item.item.categoria + ' '}</TempoDeEntrega>
              <MaterialCommunityIcons
                name="circle"
                size={5}
                color="rgba(0,0,0,0.4)"
                style={{
                  marginTop: 3,
                }}
              />
              <TempoDeEntrega>{' ' + item.item.porte}</TempoDeEntrega>
            </RamoAtuacao>
            <ValorFrete>Preço: {' ' + item.item.valor}</ValorFrete>
          </Adicionais>
        </Info>
      </Left>
    </Container>
  );
}

export default Avaliado;
