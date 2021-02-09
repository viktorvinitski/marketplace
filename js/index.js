const credits = [
    {
        name: 'Для закрытия кассовых разрывов',
        percent: 5,
        time: 'До 60 месяцев',
        sum: 'До 100 000 BYN',
        img: '/img/bank_pic/alfabank-pic.svg'
    },
    {
        name: 'Финансирование оборотного капитала',
        percent: 10,
        time: 'До 18 месяцев',
        sum: 'От 1500 BYN',
        img: '/img/bank_pic/priorbank-pic.svg'
    },
    {
        name: 'Кредитный экспресс',
        percent: 11.74,
        time: 'До 60 месяцев',
        sum: 'До 206 140 BYN',
        img: '/img/bank_pic/bankreshenie-pic.svg'
    },
    {
        name: 'Бизнес оборот',
        percent: 11.76,
        time: 'До 36 месяцев',
        sum: 'От 5 000 BYN',
        img: '/img/bank_pic/bps-pic.svg'
    },
    {
        name: 'Для закрытия кассовых разрывов',
        percent: 12,
        time: 'До 60 месяцев',
        sum: 'До 100 000 BYN',
        img: '/img/bank_pic/alfabank-pic.svg'
    },
    {
        name: 'Финансирование оборотного капитала',
        percent: 16,
        time: 'До 18 месяцев',
        sum: 'От 1500 BYN',
        img: '/img/bank_pic/priorbank-pic.svg'
    }
]
let fromCheapestPrice = true

class creditView{
    constructor(containerId) {
        this.containerId = containerId;
      }
      display(credit) {
        if (!this.container) {
          this.container = document.getElementById(this.containerId);
        }
        if(fromCheapestPrice === true){
            this.container.innerHTML = credit
                .sort((a,b) => a.percent - b.percent)
                .map((item) => this.getMessageHTML(item))
                .join("");
        }
        if(fromCheapestPrice === false){
            this.container.innerHTML = credit
                .sort((a,b) => b.percent - a.percent)
                .map((item) => this.getMessageHTML(item))
                .join("")
        }
      }
      getMessageHTML({ name, percent, time, sum, img }) {
          return `
          <div class="credit">
                    <div class="credit_about">
                        <div class="credit_name">${name}</div>
                        <div class="credit_desc">
                            <div class="credit_percent">
                                <div>${percent}%</div>
                                <div>процентная ставка</div>
                            </div>
                            <div class="credit_time">
                                <div>${time}</div>
                                <div>срок кредита</div>
                            </div>
                            <div class="credit_money">
                                <div>${sum}</div>
                                <div>сумма кредита</div>
                            </div>
                        </div>
                    </div>
                    <div class="credit_pic">
                        <img src="${img}" alt="bank">
                    </div>
                    <div class="credit_buttons">
                        <button>Подать заявку</button>
                        <a href='/pages/credits/priorbankPage.html'>Подробнее</a>
                    </div>
                </div>
         `;
    }
}
const currentCredits = new creditView("creditList")
currentCredits.display(credits)



function sortByPercent(){
    fromCheapestPrice = !fromCheapestPrice
    currentCredits.display(credits)
}
    