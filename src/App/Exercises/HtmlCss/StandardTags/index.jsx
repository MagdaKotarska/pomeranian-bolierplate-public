import './styles.css';

export function StandardTags() {
  return (
    <div className="standard-tags">
      <div class="original-tags">
        <h1>Tytuł</h1>
        <small>05.2023</small>
        <h3>
          H<sub>2</sub>O is good for you
        </h3>
        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>
        <h3>
          25<sup>th</sup> birthday
        </h3>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someones day a great day. Whether youre celebrating your birthday or
          someone elses, you can rely on our list of <i>happy birthday</i>
          <q>quotes</q> to help put a smile on someones face. From
          inspirational to funny to cute sayings, browse our list of
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>
          can stop you!
        </p>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </p>
      </div>
      =========
      <div class="faked-tags">
        <div className="title-standard-tags">Tytuł</div>
        <span className="data-standard-tags">05.2023</span>
        <div className="title2-standard-tags">
          H<span>2</span>O is good for you
        </div>
        <p>
          Staying <span className="word-standard-tags">hydrated</span> is one of
          the best things you can do for your overall health. Staying{' '}
          <span className="word-standard-tags">hydrated</span> can help support
          physical performance, prevent headaches and constipation, and more.
        </p>
        <div className="title2-standard-tags">
          25<span>th</span> birthday
        </div>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someones day a great day. Whether youre celebrating your birthday or
          someone elses, you can rely on our list of{' '}
          <span className="word2-standard-tags">happy birthday</span>
          <span className="word20-standard-tags">quotes</span> to help put a
          smile on someones face. From inspirational to funny to cute sayings,
          browse our list of
          <span>quotes</span> to find one that resonates with you.
          <span className="word3-standard-tags">Nothing</span>
          can stop you!
        </p>
        <div className="title2-standard-tags">
          Why not to use <span className="lists-standard-tags">lists</span> ?
        </div>
        <p>
          <div className="title3-standard-tags">
            A lot of things to do <span>#todo</span>
          </div>
          <div className>
            <div className="list1-standard-tags">Todo 1</div>
            <div className="list1-standard-tags">Todo 2</div>
            <div className="list1-standard-tags">Todo 3</div>
          </div>
        </p>
      </div>
    </div>
  );
}
