import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation(props) {
    const location = useLocation(); // ---> this is the problem
    return (
        <div>
            {
                props.themes.map((theme, index) => {
                    return <Link key={index} to={"/" + theme.id}>
                        { theme.name }
                    </Link>
                })
            }
        </div>
    );
}

export default Navigation;