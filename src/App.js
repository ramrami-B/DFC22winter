// import Bottom from "./components/bottom";
// import Top from "./components/top";
// import Home from "./home/home";

function App() {
  const TIME_ELEMENTS = [
    ["7:00 ~ 8:00", "집합", "QT", "QT", "QT"],
    ["8:00 ~ 9:00", "아침식사", "아침식사", "아침식사"],
    ["9:00 ~ 10:00", "가지모임(2)", "가지모임(3)", "폐회 예배"],
    ["10:00 ~ 11:00", "활동(1)", "선택 특강", "받은 은혜 가지고 살아내기"],
    ["11:00 ~ 12:00"],
    ["12:00 ~ 14:00", "점심식사", "점심식사"],
    ["14:00 ~ 15:00", "오프닝 콘서트", "전체 특강", "내연산 등산"],
    ["15:00 ~ 16:00", "QT & 휴식"],
    ["16:00 ~ 17:30", "가지 모임(1)", "활동(2)"],
    ["17:30 ~ 19:00", "저녁식사"],
    ["19:00 ~ 21:30", "저녁집회"],
    ["21:30 ~ 22:00", "가지별 모임", "가지별 모임", "지구별 모임"],
    ["22:00 ~ ", "취침 (월, 화: 12시 소등)"],
  ];

  function goHompage() {
    window.location.href = "http://www.dfc.kr/";
  }
  return (
    <div id="main">
      <div id="top">
        <div className="window-controll"></div>
        <div className="search-bar">
          <p>www.대구포항 DFC 22 겨울수련회.co.kr</p>
        </div>
      </div>
      <div id="home">
        <div className="time-table-div">
          <div className="time-table">
            <div className="time-table-top">
              <p>❤ 만날 결심 ❤</p>
            </div>
            <table>
              {/* HEAD */}
              <tr className="point">
                <th></th>
                <th>첫째 날</th>
                <th>둘째 날</th>
                <th>셋째 날</th>
                <th>넷째 날</th>
              </tr>
              {/* TIME */}
              {TIME_ELEMENTS.map((times, idx) => (
                <tr key={idx}>
                  {times.map((time, i) => {
                    return time.includes("~") ? (
                      <td className="point" key={i}>
                        {time}
                      </td>
                    ) : time === "집합" ? (
                      <td rowSpan={6} key={i}>
                        {time}
                      </td>
                    ) : time === "활동(1)" ? (
                      <td rowSpan={2} key={i}>
                        {time}
                      </td>
                    ) : time === "선택 특강" ? (
                      <td rowSpan={2} key={i}>
                        {time}
                      </td>
                    ) : time === "전체 특강" ? (
                      <td rowSpan={2} key={i}>
                        {time}
                      </td>
                    ) : time === "내연산 등산" ? (
                      <td rowSpan={3} key={i}>
                        {time}
                      </td>
                    ) : time === "받은 은혜 가지고 살아내기" ? (
                      <td rowSpan={10} key={i}>
                        {time}
                      </td>
                    ) : time.includes("저녁") ? (
                      <td colSpan={3} key={i}>
                        {time}
                      </td>
                    ) : time.includes("취침") ? (
                      <td colSpan={3} key={i}>
                        {time}
                      </td>
                    ) : (
                      <td key={i}>{time}</td>
                    );
                  })}
                </tr>
              ))}
            </table>
            <p className="temp">* 둘째 날 전체 특강은 15:30분까지 입니다!</p>
          </div>
        </div>
      </div>
      <div id="bottom">
        <button onClick={goHompage}>Be DFC GROWTH</button>
        <div>
          <p>히브리서 10:25</p>
        </div>
      </div>
    </div>
  );
}

export default App;
