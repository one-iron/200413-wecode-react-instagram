import React, { Component } from 'react';
import './mainRight.css';


class MainRight extends Component {
    render() {
        return (
            <div className="mainRight">
                <div className="mainRightContainer">
                    <div className="myProfile">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6equvE1VuyGtmIxZEXu6sXDY-ZWPlK1hP4KTZJCaABta4k_1_&usqp=CAU" />
                        </div>
                        <div className="profileBox">
                            <div className="profile01">BMO</div>
                            <div className="profile02">어탐귀염둥이비모</div>
                        </div>
                    </div>
                    <div className="story">
                        <div className="storyMenu">
                            <div className="storyText01">스토리</div>
                            <div className="storyText02">모두 보기</div>
                        </div>
                        <div className="storyList">
                            <div className="storyProfile" className="myProfile">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6equvE1VuyGtmIxZEXu6sXDY-ZWPlK1hP4KTZJCaABta4k_1_&usqp=CAU" />
                                </div>
                                <div className="profileBox">
                                    <div className="profile01">BMO</div>
                                    <div className="profile02">3분 전</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="recomand">
                        <div className="story">
                            <div className="storyMenu">
                                <div className="storyText01">회원님을 위한 추천</div>
                                <div className="storyText02">모두 보기</div>
                            </div>
                            <div className="storyList">
                                <div className="storyProfile" className="myProfile">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6equvE1VuyGtmIxZEXu6sXDY-ZWPlK1hP4KTZJCaABta4k_1_&usqp=CAU" />
                                    </div>
                                    <div className="profileBox">
                                        <div className="profile01">BMO</div>
                                        <div className="profile02">회원님을 팔로우 합니다</div>
                                    </div>
                                    <div className="follow">
                                        팔로우
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainRight;