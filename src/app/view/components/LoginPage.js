import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import "/src/styles/Login.css";
import Card from "@/app/view/components/static/Card";
import {VodafoneButton} from "@/app/view/components/VodafoneButton";

const LoginPage = ({email, setEmail, password, setPassword, incorrect, login}) => {
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

    const handleFormSend = (e) => {
        e.preventDefault();

        login();
    }
    return (
        <>
            <Page>
                <PageContainer>
                    <Card center="true" small="true">
                    <h1 className="header centered">Inloggen</h1>
                    <form class="loginForm" onSubmit={handleFormSend}>
                    <label htmlFor="email">Email</label>

                    <br></br>

                        <input 
                            id="email" 
                            type="text" 
                            autoComplete="email" 
                            value={email} 
                            onChange={onEmailInput} 
                            onKeyDown={checkEnter}
                        />

                        <br></br>

                        <label htmlFor="password">Wachtwoord</label>

                        <br></br>

                        <input 
                            id="password" 
                            type="password" 
                            autoComplete="password" 
                            value={password} 
                            onChange={onPasswordInput}
                            onKeyDown={checkEnter}
                        />

                        <br></br>

                        <VodafoneButton type = "submit">Login</VodafoneButton>
                    </form>

                    {incorrect && (<p className="error">Incorrect combinatie van email en wachtwoord</p>)}

                    </Card>
                </PageContainer>
            </Page>
        </>
    );
};

export default LoginPage;