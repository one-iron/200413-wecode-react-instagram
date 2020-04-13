import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Btn from "../../components/btn/btn.js";
import './login.css';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            idLength : '',
            pwLength : '',
        }
        
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    };

    handleEnter = (e) => { 
        if (e.key === "Enter") {
            this.goToMain();
          }
    }

    goToMain = () => {
        this.state.idLength > 4 && this.state.pwLength > 4 ? 
        this.props.history.push('/main') : 
        alert('아이디와 비밀번호 5자리 이상 입력해 주세요. 😄')
    }

    render() {
        const {idLength, pwLength} = this.state;
        return (
            <div className="Login">
                <container onKeyPress={this.handleEnter}>
                    <header>
                        <img src="/images/logo_text.png" />
                    </header>
                    <content>
                        <div className="loginInput">
                            <input 
                                name = "idLength"
                                value = {idLength}
                                onChange={this.handleChange} 
                                type="text" 
                                placeholder="전화번호, 사용자 이름 또는 이메일" 
                            />

                            <input 
                                name = "pwLength"
                                value = {pwLength} 
                                onChange={this.handleChange} 
                                type="password" 
                                placeholder="비밀번호" 
                            />
                        </div>

                        <div>
                            <Btn
                                id={idLength}
                                pw={pwLength}
                            />
                        </div>
                    </content>
                    <footer>
                        비밀번호를 잊으셨나요?
                </footer>
                </container>
            </div>

        )
    }
}

export default withRouter(Login);