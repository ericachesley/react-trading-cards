"use strict";

class About extends React.Component {
  render() {
    return (
      <div>
        <p>I'm pretty cool.</p>
      </div>
    );
  }
}

ReactDOM.render(<About />, document.querySelector('#info'));
