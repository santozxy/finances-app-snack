import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LinearProgress } from 'react-native-elements';

import { quinternary } from '../../../../../colors';

const ProgressGoals = ({ goals, valueAdd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calcula a porcentagem de progresso com base nos valores atuais e no objetivo
    const porcentagem = Math.round((valueAdd / goals) * 100);

    // Atualiza o progresso da barra
    if (porcentagem <= 100) {
      setProgress(porcentagem / 100);
    }
  }, [valueAdd]);

  return (
    <View>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={progress}
        style={{ borderRadius: 10 }}
        trackColor={quinternary}
      />
      <Text
        style={{
          marginTop: 5,
          fontSize: 15,
          fontWeight: 'bold',
          color: quinternary,
          textAlign: 'center',
        }}>{`${Math.round(progress * 100)}%`}</Text>
    </View>
  );
};

export default ProgressGoals;
