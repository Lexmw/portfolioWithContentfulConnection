export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Lexius Waltar Portfolio</h1>
          <div>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li>
              <li>
                <div></div>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }