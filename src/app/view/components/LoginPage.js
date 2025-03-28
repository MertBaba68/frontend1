import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import "/src/styles/Login.css";
import Card from "@/app/view/components/static/Card";
import {VodafoneButton} from "@/app/view/components/VodafoneButton";
import {InputField} from "@/app/view/components/InputField";

const LoginPage = ({email, setEmail, password, setPassword, incorrect, login}) => {
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
                        <form className="loginForm" onSubmit={handleFormSend}>
                            <InputField
                                label="Email"
                                id="email"
                                type="text"
                                typeOfInput="input"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onEnter={login}
                            />

                            <br></br>

                            <InputField
                                label="Wachtwoord"
                                id="password"
                                type="password"
                                typeOfInput="input"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onEnter={login}
                            />

                            <br></br>

                            {incorrect && (<><p className="error">Incorrect combinatie van email en wachtwoord</p><br></br></>)}

                            <VodafoneButton type = "submit">Login</VodafoneButton>
                        </form>
                    </Card>
                </PageContainer>
            </Page>
        </>
    );
};

export default LoginPage;