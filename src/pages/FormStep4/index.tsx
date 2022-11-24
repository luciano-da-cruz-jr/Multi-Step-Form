import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        }

        if(state.email === '' || state.github ==='') {
            navigate('/step3');
        }
        else{
                dispatch({
                    type: FormActions.setCurrentStep,
                    payload: 4
                });
            }
        
    }, []);

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Parabéns cadastro realizado com sucesso!</h1>
                <label>Nome: {state.name}</label><br/>
                <label>Nível: 
                    {state.level === 0 && 
                            <> Sou iniciante</>
                    }
                    {state.level === 1 && 
                            <> Sou Programador</>
                    }
                </label><br/>
                <label>E-mail: {state.email}</label><br/>
                <label>Github: {state.github}</label><br/>

                <hr/>

                <Link to="/step3" className="backButton">Voltar</Link>
            </C.Container>
        </Theme>
    );
}