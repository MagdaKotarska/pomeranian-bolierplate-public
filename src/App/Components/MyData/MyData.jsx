import './styles.css';

export const MyData = () => {
  return (
    <div className="my-data">
      <img
        className="item2"
        src="/images/neom-WZCMd9K-sHY-unsplash.jpg"
        alt=""
      />
      <h4>
        <div className="name-my-data">Magdalena Kotarska</div>
        <div className="adress-my-data">Gdańsk</div>
      </h4>

      <p>
        <div className="mail-my-data">e-mail:</div>
        <div>magdalena.kotarska@gmail.com</div>
      </p>
      <p>
        <div>telefon:</div>
        <div>000000000</div>
      </p>
    </div>
  );
};
