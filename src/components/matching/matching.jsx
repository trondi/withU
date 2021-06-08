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
                    <h1>🏋️‍♂️ Matching Your trainner 🏋️‍♀️</h1>
                    <br />
                       트레이너 매칭을 하기 위해 다음 설문에 응답해주세요! 🏃‍♀️🏃‍♂️🏃<br />
                       설문 조사에 대한 응답은 제 3자인 트레이너 선생님께 전달되며, <br />
                       응답할 시 제 3자(트레이너)에게 정보 제공을 동의하는 것으로 간주됩니다.<br /><br />
                       <b>이제 나에게 맞는 트레이너를 찾아봅시다 ❗❗ </b>
                      <br /><br /><br /><br />
                      
                        1. 운동을 하는 목적은?
                      <br /><br />
                        <input type="checkbox" value="hp" name="hp" />체력 증진 &nbsp;
                        <input type="checkbox" value="diet" name="diet" />다이어트 &nbsp;
                        <input type="checkbox" value="muscle" name="muscle" />근력 증가 &nbsp;
                        <input type="checkbox" value="stress" name="stress" />스트레스 해소 &nbsp;
                         기타 : <input type="text" name="etc_p" />
                      <br /><br /><br />
                        2. 집중적으로 빼고싶은 부위가 있다면 어느 부위인가요?
                      <br /><br />
                        <input type="checkbox" value="arm" name="arm" />팔뚝 &nbsp;
                        <input type="checkbox" value="lower" name="lower" />하체 &nbsp;
                        <input type="checkbox" value="belly" name="belly" />복부 &nbsp;
                        기타 : <input type="text" name="etc" />
                      <br /><br /><br />
                        3. 기간은 어느 정도로 생각하시나요?
                      <br /><br />
                          기간 : <input type="text" name="stress" />
                      <br /><br /><br />
                        4. 다른 기타사항을 적어주세요 ❗ <br /><br />
                      희망하는 운동 방식을 적어주셔도 되고 트레이너 분들이 참고할만한 사항들을 적어주시면,<br />
                      참고하여 도와드리겠습니다.<br />
                      (운동 스타일이나 불편하신 곳이 있으면 자유롭게 작성해주세요 😊)
                      <br /><br />
                      <textarea></textarea>
                      <br /><br /><button> 응답 완료 </button><br />
                      
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
