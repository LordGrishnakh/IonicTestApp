import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

const BmiResult: React.FC<{bmi: number}> = props => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>{props.bmi > 0 ? props.bmi : null}</IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
