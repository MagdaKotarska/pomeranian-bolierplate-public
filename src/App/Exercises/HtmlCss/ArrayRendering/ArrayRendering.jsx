import './styles.css';

export const ArrayRendering = () => {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];
  /*return (
    <div>
      Auta:
      <ul>
        {cars.map((car) => {
          const { id, make, model, owner, year } = car;
          return (
            <li key={car.id}>
              {make} {model} ({year}) - <b>{owner}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};*/

  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London,Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy,in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg,Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like,Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love,Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  return (
    <div>
      <table>
        <tr>
          <th>BAND</th>
          <th>YEAR FORMED</th>
          <th>No.OF ALBUMS</th>
          <th>MOSTA FAMOUS SONG</th>
        </tr>
        {bands.map((bands) => {
          const { band, yearFormed, albums, mostFamousSong } = bands;
          return (
            <tr>
              <td>{band}</td>
              <td>{yearFormed}</td>
              <td>{albums}</td>
              <td>
                <b>{mostFamousSong}</b>
              </td>
            </tr>
          );
        })}
        <tr>
          <td colspan="2">Total albums</td>
          <td colspan="2">77</td>
        </tr>
      </table>
    </div>
  );
};
