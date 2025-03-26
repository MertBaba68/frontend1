import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import "/src/styles/Login.css";
import Card from "@/app/view/components/static/Card";

const Login = ({email, setEmail, password, setPassword, incorrect, login}) => {
    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordInput = (e) => {
        setPassword(e.target.value);  
    };

    const checkEnter = (e) => {
        if (e.key == 'Enter') {
            login();
        }
    }

    return (
        <>
            <Page>
                <PageContainer>
                    <Card>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="text" 
                            autoComplete="email" 
                            value={email} 
                            onChange={onEmailInput} 
                            onKeyDown={checkEnter}
                        />

                        <label htmlFor="password">Wachtwoord</label>
                        <input 
                            id="password" 
                            type="password" 
                            autoComplete="password" 
                            value={password} 
                            onChange={onPasswordInput}
                            onKeyDown={checkEnter}
                        />
                        {
                            incorrect && (
                                <p>Incorrect combinatie van email en wachtwoord</p>
                            )
                        }

                        <button 
                            onClick={login}
                            onKeyDown={checkEnter}
                        >
                        Login
                        </button>
                    </Card>
                </PageContainer>
            </Page>
        </>
    );
};

export default Login;
