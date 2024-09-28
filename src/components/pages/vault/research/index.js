import React from 'react';

const MyComponent = () => {
  return (
    <div>
      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '3px',
          background: 'transparent',
          zIndex: '99999999999',
          width: '100%',
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#733bad',
            transition: 'all 500ms ease',
            width: '0%',
          }}
        >
          <div
            style={{
              boxShadow: '0 0 10px #733bad, 0 0 10px #733bad',
              width: '5%',
              opacity: '1',
              position: 'absolute',
              height: '100%',
              transition: 'all 500ms ease',
              transform: 'rotate(3deg) translate(0px, -4px)',
              left: '-10rem',
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="MainBox clearfix">
        <div className="iIptEK"></div>
        <div className="dzCfpc">
          <div className="gWupbu active">
            🔥 BRAND NEW Education Index Page – <a href="index">Check It Out Here!</a>
            <button></button>
          </div>

          <div className="wow fadeInUp" data-wow-duration="1.2s">
            <div className="eWdxDi">
              <div className="lgpuyE">
                <button className="MMenu" aria-label="MMenu" id="mmenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <div className="Menuouter02"></div>

                <div className="gZwNIe wow fadeInUp" data-wow-duration="1.2s">
                  <div className="kUQsGv">
                    <a href="../../index.html">
                      <img
                        alt="Liquid Loans"
                        loading="lazy"
                        width="140"
                        height="47"
                        decoding="async"
                        style={{ color: 'transparent' }}
                        srcSet="../../_next/image?url=%252F_next%252Fstatic%252Fmedia%252FdarkLogo.5a554f11.png&amp;w=256&amp;q=75amp;q=../../_next/image?url=%252F_next%252Fstatic%252Fmedia%252FdarkLogo.5a554f11.png&amp;w=384&amp;q=75"
                        src="../../_next/image?url=%252F_next%252Fstatic%252Fmedia%252FdarkLogo.5a554f11.png&amp;w=384&amp;q=75"
                      />
                    </a>
                  </div>

                  <a className="leYKzo BarON" href="liquidloans/start-here" target="_blank">
                    START HERE
                  </a>
                </div>

                <div className="SmenuFix collapse-css-transition" style={{ overflow: 'hidden', height: '0px', visibility: 'hidden' }}>
                  <div className="eXiiUl wow fadeInUp" data-wow-duration="1.2s">
                    <div className="dgwACn">
                      <nav className="desktop-menu">
                        <a href="../../dapp">
                          <div className="Mi Mi17"></div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
