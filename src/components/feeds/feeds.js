import React, { Component } from 'react';
import './feeds.css';

class Feeds extends Component {
    constructor() {
        super();
        this.state = {
             comment: [] }
    }

    handleEnter = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            let comments = Array.from(this.state.comment);
            comments.push(e.target.value);
            this.setState({
                comment: comments
            })
            e.target.value = "";
        }
    }

    handleDelete = (index) => {
        const comment = this.state.comment;
        comment.splice(index, 1);
        this.setState({
            comment: comment
        })
    }

    render() {
        const { comment } = this.state;
        const commentList = comment.map(
            (comment, index) => (
                <li>
                    <div className="commentBox">BMO {comment}</div>
                    <span className="btn" onClick={()=>this.handleDelete(index)}>⚪</span>
                </li>

            )
        );

        return (
            <div className="feeds">
                <div className="feeds01">
                    <div className="creatorPhoto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6equvE1VuyGtmIxZEXu6sXDY-ZWPlK1hP4KTZJCaABta4k_1_&usqp=CAU" />
                    </div>
                    <div className="creatorName">
                        <span>AdvantureTimeBmo</span>
                    </div>
                    <div className="creatorName01">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADo6OjS0tLExMT8/PwjIyP39/cyMjKAgIC4uLh4eHjt7e3z8/PX19fd3d1cXFywsLBCQkJubm6ampqGhoYODg7g4OCPj49NTU2kpKTLy8tVVVUsLCzBwcFycnIWFhYdHR2pqakTExM7OztlZWW9kPFHAAADSklEQVR4nO3b13LqMBCAYdtgMARCDRBIL+//irEAJwRbZRcyc478f/faWVldiCQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt088mndv16KoxcxNzkl0x4mh925lkfXEi3c39Kj0qFrOrpNTZTl+rmL3pdnJxwGz2XFQBV/ebbh5acDycpud6m/VFyeS7m1rMdNAJzqluvenVAk6H44CS2V09lb2Hrjqb/vaxOWbxpqxj98GS5Z2vu+UDS0lj3tGls321x+zNFAFv544sB86PNnSUNBYhveA8HUv7fX836YAcLzxZDq1F+76ipZ20gkt/zDdRwN3KG3BhmVrX9aHbYClKp1+ftJoyEozGgC9W9v3GebETUrR0I6jg2NNDK/PgKrrmiVMNU0Y3sGg5JwdXMHsPjfkYOMCDusRebeYPbUEjtBVDW9CYB+1KGhZVq7NWzARF03QTVsMPScyHgIAbUZa/Vsa88Bc49RRSwWdZzDtvwCdZwOJ0cEtafy9gPz6TxvTtmUbSgCejaSctG9CnxPmkr56haNuo2f0s3kEL4W/efirso4a7nwr7qNGrygYtoueFPSuYZG7+5tq/5YpmqLYnuSaZ1LNjlnep0rMjoHhY7x3aYasqWzgrOFHFTB1HH+Fsf7TdlxUtWz+cU59iFBr2hVY+Ge59mLKqEVP6dFRw7N//N1pZIwYcexqZnU3oXrbGMdf4zplWtsOZbq4oDRJtB0+d3VTZSe0LRvi54EyhWZl92ZSnQvVXm1si2i6P/Eb6DuWYTWX7+F8ss6n6k6VD1XJ/8GLdZan7lG3R77+oAy7Vk5Q1m0S3STpqvkVSLq/GQrsaGtZbKf2osayIytXQ+NDsuivWGooPYz8G165hLwm+Sqmz3kt+6mM235Dop8P0PdGXtd9zqrbdB82b77cLsmxBG8Y/DuOfS+NfD+Pf08S/L43/bBH/+bAFZ/x/6Z4mtUa85J7mT+7alAn9zV1bC+5L47/zjv93ixb89tSC3w/j/w24Bb/jx/8WowXvaVrwJqoF79pa8DaxBe9Lk/jfCCcteOedxP9W34j9/xaHhOL+z0wl6v89AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/90XGWo/4W2T/UoAAAAASUVORK5CYII=" />
                    </div>
                </div>
                <div className="feeds02">
                    <img src="https://i.pinimg.com/originals/c0/9e/8e/c09e8ee6e741744b687a2cadb72c6bcb.jpg" />
                </div>
                <div className="feeds03">
                    <div className="heart">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRXr4gIJ46kaq7RVJ2zLVCE9MC41P-nWU3-AcR4t6vuSISnjHd&usqp=CAU" />
                    </div>
                    <div className="comment">
                        <img src="data:image/png;base64,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" />
                    </div>
                    <div className="save">
                        <img src="data:image/png;base64,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" />
                    </div>
                </div>
                <div className="feeds04">
                    <div className="likes">좋아요 5개
                    </div>
                    <div className="content">
                        <span className="id">
                            BMO
                                </span>
                        <span>
                            비모의 비밀 개달콤
                                </span>
                        <div className="hashtag">
                            #어탐&nbsp; #비모&nbsp; #귀염둥이
                                </div>
                        <div className="commentBox">
                            {commentList}
                        </div>
                        <div className="time">
                            5분전
                                </div>
                        <div className="inputBox">
                            <input
                                onKeyPress={this.handleEnter}
                                className="inputText"
                                type="text"
                                placeholder="댓글 달기..."
                            />
                            <div className="submit" onClick={() => console.log(this)} > 게시</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feeds;