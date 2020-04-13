import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Btn extends Component {    
    goToMain = () => {
        this.props.id > 4 && this.props.pw > 4 ? this.props.history.push('/main') : alert('아이디와 비밀번호 5자리 이상 입력해 주세요. 😄')
      }

    render() {
        return (
            <div className="Btn">
                <button 
                style={{
                    backgroundColor :
                     this.props.id > 0 && this.props.pw > 0 ?
                     "#0095F6" : "#B2DFFC"
                }}
                type="button" 
                className="loginButton"
                onClick={this.goToMain}
                >로그인</button>
            </div>
        )
    }
}

export default withRouter(Btn);