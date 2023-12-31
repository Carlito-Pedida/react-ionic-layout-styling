import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const techExp: string[] = [
    "HTML5 / CSS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "API",
    "Database Management"
  ];
  const displayExp = () => {
    return techExp.map((exp) => {
      return (
        <IonItem key={exp}>
          <IonLabel>{exp}</IonLabel>
        </IonItem>
      );
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="">
          <IonRow className="ion-margin-start">
            <IonCol size-xs="4" size-md="2">
              <IonCard>
                <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9X1bG7vLJIfONMjBF45-OGRzubDCSjqZGw&usqp=CAU"></IonImg>
              </IonCard>
            </IonCol>
            <IonCol className="ion-text-start" size-xs="8" size-md="10">
              <div>
                <h1>John Smith</h1>
                <p>Technology is best when it brings people together.</p>
              </div>
            </IonCol>
            <IonCol class="ion-padding" size="12">
              <h1>About</h1>
              <p>
                Pop culture nerd. Travel geek. Passionate food practitioner.
                Friendly communicator. Tv specialist. Typical coffee guru.
                Introvert. Food aficionado. Bacon practitioner. Award-winning
                creator. Internet fanatic.
              </p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-start">
            <IonCol class="ion-padding" size-xs="12" size-md="6">
              <h1>Work Experience</h1>
              <IonList>
                <IonItem>
                  <IonSelect label="Chief Design Engineer">
                    <IonSelectOption>
                      Heads a team of engineering people that designs some sort
                      of engineering stuff.
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Budget/Accounting Analyst I">
                    <IonSelectOption>
                      Accounts some budgets and analyze things that has
                      something to do with budgets and accounting.
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Quality Control Specialist">
                    <IonSelectOption>
                      Specializes on controlling the quality of stuff to ensure
                      that the stuff is of high quality based on the quality
                      guidelines for stuff.
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonCol>
            <IonCol class="ion-padding" size-xs="12" size-md="6">
              <h1>Technology Experience</h1>
              <IonList>{displayExp()}</IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="full" color="new">
            john.smith@email.com
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
