// import logo from './logo.svg';
import './App.css';
import SummaryDetail from './SummaryDetail';
import data from './data';

function App() {
  return (
    <section class="s flex-lg m-lg-auto justify-center v-align-center shadow">
        
        <section class="score-section align-center p-3 txt-white m-365 m-auto m-lg-0">
          <p class="txt-paleblue py-3 font-wt">Your Result</p>
          <div class="score-bg flex v-align-center flex-dir m-auto">
            <h1 class="t-score">76</h1>
            <p>of 100</p>
          </div>
          <p class="font-wt py-3">Great</p>
          <p class="txt-paleblue small">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
    
        <section class="s p-4 m-365 m-auto">
          <h2 class="my-3">Summary</h2>
          {
            data.map(item => 
              <SummaryDetail 
                id = {item.id}
                category= {item.category}
                score= {item.score}
                icon= {item.icon}
              />
            )
          }
          
          <button name="button" class="w-100 block bg-darkgreyblue my-3 txt-white btn">
            Continue
          </button>
        </section>
      </section>
  );
}

export default App;
