import { Outlet /*useNavigation*/ } from "react-router-dom";

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    //const navigataion = useNavigation();

    return (<>
        <MainNavigation />
        <main>
            {/*navigataion.state === 'loading' && <p>Loading...</p>*/}
            <Outlet />
        </main>
    </>
    );
}

export default RootLayout;