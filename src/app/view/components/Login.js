import Page from "@/app/view/components/static/Page";
import PageContainer from "@/app/view/components/static/PageContainer";
import "/src/styles/Login.css";
import Card from "@/app/view/components/static/Card";

const Login = ({email, setEmail, password, setPassword, login}) => {
    
    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordInput = (e) => {
        setPassword(e.target.value);  
    };

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
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            autoComplete="password" 
                            value={password} 
                            onChange={onPasswordInput}
                        />

                        <button onClick={login}>Login</button>
                    </Card>
                </PageContainer>
            </Page>
        </>
    );
};

export default Login;
