"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Nice to have you here!</p>
        <div>
            <a href='/cards'>Cards</a>
            <p></p>
        </div>
        <div>
            <img src='/static/img/balloonicorn.jpg'/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
