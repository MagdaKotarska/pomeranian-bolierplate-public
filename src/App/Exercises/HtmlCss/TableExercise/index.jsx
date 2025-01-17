import './styles.css';
import { StarIcon } from '/home/magdakotarska/projects/pomeranian-bolierplate-public/src/App/Components/Icons/StarIcon';
export function TableExercise() {
  return (
    <div>
      <h5>
        1.The following data were collected by a group of students as they
        tested four different types of plastic.
      </h5>
      <table className="first-table">
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease color</th>
        </tr>

        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>none</td>
        </tr>
      </table>
      <div>
        Which plastic would be unsafe to use to store products that contain
        acetone?
      </div>
      <ol type="a">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ol>

      <h5>Ćwiczenia z tworzenia tabel</h5>
      <table className="second-table">
        <tr>
          <th className="left-border">Location</th>
          <th>PLAYER_iD</th>
          <th className="right-border">Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>
            {' '}
            <StarIcon />
            <StarIcon /> <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>Cape Vedre Islands</td>
          <td>#100124</td>
          <td>
            <StarIcon />
            <StarIcon /> <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>USA</td>
          <td>#100126</td>
          <td>
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
        <tr>
          <td>USA</td>
          <td>#100128</td>
          <td>
            <StarIcon />
            <StarIcon /> <StarIcon />
            <StarIcon />
          </td>
        </tr>
      </table>
    </div>
  );
}
