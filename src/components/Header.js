import React from 'react'

class Header extends React.Component {
    render() {
        return (
            // <section id="header">
            //     <div className="inner">
            //         <span className="icon major fa-cloud"></span>
            //         <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
            //         little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
            //         <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
            //         lobortis feugiat sapien sed etiam volutpat accumsan.</p>
            //         <ul className="actions">
            //             <li><a href="#one" className="button scrolly">Discover</a></li>
            //         </ul>
            //     </div>
            // </section>

            <section id="header">
            <div className="inner">
                <span className="icon major fa-cloud"></span>
                {/* <h1>Hi, you're probably <strong>not</strong> charging<br />
                your phone right.</h1> */}
                <h1>Want to charge your phone faster?</h1>
                {/* <p>Read this guide to see how you can better charge your phone</p> */}
                <ul className="actions">
                    <li><a href="#one" className="button scrolly">Discover how</a></li>
                </ul>
            </div>
        </section>
        )
    }
}

export default Header
