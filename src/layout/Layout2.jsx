// import React from 'react'

// import Navbar from '../components/Navbar'
// import Playersection from '../components/Playersection'

// const Layout2 = () => {
//     return (
//         <div>
//             <div>

//                 <Navbar />

//             </div>

//             <div>

//                 <Playersection />

//             </div>
//         </div>
//     )
// }

// export default Layout2;


import React from 'react';
import Navbar from '../components/Navbar';
import Playersection from '../components/Playersection';

const Layout2 = ({ showPlayerSection }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            {showPlayerSection && (
                <div>
                    <Playersection />
                </div>
            )}
        </div>
    );
};

export default Layout2;
