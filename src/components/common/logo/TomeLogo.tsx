
function tomeLogo() {

  return (
      <div>
          <img className="logo tome" src="/tome.svg" alt="Tome logo"/>
          <h1 className="tome">Tome</h1>
          <p className="subtext">Version {__APP_VERSION__}</p>
      </div>
  )
}

export default tomeLogo;