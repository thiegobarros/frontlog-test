import './App.css';

function App() {

  const clickError = () => {
    console.error("console error");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontlog Storage Test</h1>
      </header>

      <div className='App-body'>

        <hr></hr>

        <p>Storage Access: F12 or right click "inspect" <span>&#8594;</span> Select Tab "Application" <span>&#8594;</span> Select "Session Storage" <span>&#8594;</span> Select website URL;</p>
        <p>Key Press Test: Type in the field "Test Key Press";</p>
        <p>Click Test: Click on the field <font color="blue">"Test Click"</font>;</p>
        <p>On Hover Test: Place the mouse for 3 seconds on the field <font color="lime">"Test On Hover"</font> and then remove the mouse from above;</p>
        <p>Error Test: Click on the field <font color="red">"Test Error"</font>.</p>

        <hr></hr>

        <label>Test Key Press</label><br/>
        <input
          type="text"
          id="testKeypress"
          name="testKeypress"
          className="testKeypress"
          data-front-log="keypress"
          placeholder="type here"
        />
        
        <div
          id="testClick"
          name="testClick"
          className="customDivs testClick"
          data-front-log="click"
        > Test Click </div>

        <div
          id="testOnHover"
          name="testOnHover"
          className="customDivs testOnHover"
          data-front-log="onhover"
        > Test on Hover </div>

        <div
          id="testError"
          name="testError"
          className="customDivs testError"
          onClick={clickError}
        > Test Error </div>

      </div>
    </div>
  );
}

export default App;
