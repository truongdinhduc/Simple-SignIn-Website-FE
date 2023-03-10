import { useEffect } from "react";
import { useDispatch } from "react-redux";

declare var google: any;

export declare interface SignInWithGoogleProps {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;
}
export default function SignInWithGoogle(props: SignInWithGoogleProps): JSX.Element {
    const { } = props;
    const dispatch = useDispatch()
    
    const handleCredentialResponse = (response:any) => {
        const payload = {
            client_id: response?.client_id,
            id_token: response?.credential
        }
        dispatch({ type: 'signInWithGoogle', payload: payload })
    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: '498509860472-d2ar3bqppbg0a46gsog7ji3hs0f8hfhh.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("google-button"),
            { theme: "outline", size: "large" }
        );
    }, [])

    return (<>
        <div id='google-button'></div>
    </>)
}