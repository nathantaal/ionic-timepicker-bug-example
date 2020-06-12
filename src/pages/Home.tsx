import {IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';

export default function Home() {

    const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Timepicker bug (Ion-Datetime) example</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel>HH:mm</IonLabel>
                    <IonDatetime displayFormat="HH:mm" value={selectedDate}
                                 onIonChange={e => setSelectedDate(e.detail.value!)}/>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

