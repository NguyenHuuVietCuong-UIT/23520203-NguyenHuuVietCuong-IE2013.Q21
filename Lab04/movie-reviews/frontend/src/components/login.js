import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
    const history = useHistory();

    useEffect(() => {
        if (!props.user) {
            // Nếu chưa login → login luôn
            props.login({ name: "testuser" });
        } else {
            // Nếu đã login → logout
            props.login(null);
        }

        // Redirect về movies
        history.push("/movies");
    }, []);

    return null; // không hiển thị gì
}

export default Login;