import { DefautTemplate } from "../../Componentes/DefautTemplate";
import pageStyles from "../../styles/modules/pagesBox.module.scss";


export const Dashboard = ({ user, userLogout }) => {
  return (
  
    <DefautTemplate   user={user} userLogout={userLogout}>
      <main  >
        <div className="containerUser smU">
          <h3 className="title1">Que pena! Estamos em desenvolvimento :(</h3>
          <p className="Headline">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </main>
    
    </DefautTemplate>
  );
};