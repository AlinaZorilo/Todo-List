import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../_store';

export function Logout() {
    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show logout when logged in
    if (!auth) return null;
    
    return (
     <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>   
    );
}