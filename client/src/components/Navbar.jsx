export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div style={linkStyle}>
            <a href="/loginform">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="/signupform">Sign Up</a>
          </div>
          <div style={linkStyle}>
            <a href="/loginform">Item List</a>
          </div>
          <div style={linkStyle}>
            <a href="/lostitemform">Search Item</a>
          </div>
          <div style={linkStyle}>
            <a href="/founditemform">Report an Item</a>
          </div>
          <div style={linkStyle}>
            <a href="/contactform">Contact</a>
          </div>
        </section>
      </nav>
    );
  }
  