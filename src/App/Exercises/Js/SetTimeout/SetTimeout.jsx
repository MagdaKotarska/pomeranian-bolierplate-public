import './styles.css';

export const SetTimeout = () => {
  let seconds = 60;
  let countdown = setInterval(function () {
    console.log(seconds);
    seconds--;
    if (seconds === 0) {
      clearInterval(countdown);
      console.log('Czas minął!');
    }
  }, 1000);
};
