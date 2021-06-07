import React from 'react';
import styles from './matching.module.css';

const Matching = (props) => {
  return (
    <section className={styles.card}>
      <div className={styles.main_card}>
            <div className={styles.container}>
            <header>
              <div className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1>Matching Your trainner.</h1>
                    <br />
                      트레이너를 매칭하기 위해 다음 설문조사에 응하여 주세요! 🏃‍♀️🏃‍♂️🏃<br />
                       설문 조사에 대한 응답은 제 3자인 트레이너 선생님께 전달되며, <br />응답할 시에 제3자에게 정보 제공을 동의하는 것으로 간주됩니다.<br /><br />
                       <b>이제 나에게 맞는 트레이너를 찾아보아요 ❗❗ </b>
                      <br /><br /><br /><br /><br />
                      
                        1. 운동을 하는 목적은?
                      <br />
                        <input type="radio" value="Male" name="gender" /> 체력증진
                        <input type="radio" value="Female" name="gender" /> 다이어트
                        <input type="radio" value="Other" name="gender" />
                        근력 증가
                        <input type="radio" value="Other" name="gender" /> 
                        스레스 해소
                      <br /><br />
                        2. 집중적으로 빼고싶은 부위가 있다면 어느 부위인가요? <br/>
                        <input type="radio" value="Male" name="gender" /> 팔, 팔뚝
                        <input type="radio" value="Female" name="gender" /> 하체(다리, 멀리뛰기)
                        <input type="radio" value="Other" name="gender" />
                        근력 증가
                        <input type="radio" value="Other" name="gender" /> 
                        스트레스 해소
                      <br /><br />

                  </div>
                </div>
              </div>
            </header>
            </div>
      </div>
    </section>
  );
};

export default Matching;
