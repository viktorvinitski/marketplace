const leasings = [
    {
        name: 'Лизинг легковых автомобилей',
        percent: '30-40',
        time: 'От 1 до 3 лет',
        img: '/img/leasing_pic/agro.svg'
    },
    {
        name: 'Лизинг легковых автомобилей',
        percent: '20-40',
        time: 'От 1 до 5 лет',
        img: '/img/leasing_pic/asb.svg'
    },
    {
        name: 'Лизинг легковых автомобилей',
        percent: '10-40',
        time: 'От 1 до 5 лет',
        img: '/img/leasing_pic/active.svg'
    },
    {
        name: 'Лизинг легковых автомобилей',
        percent: '10-40',
        time: 'От 1 до 5 лет',
        img: '/img/leasing_pic/rietumu.svg'
    },
    {
        name: 'Лизинг легковых автомобилей',
        percent: '30-40',
        time: 'От 1 до 3 лет',
        img: '/img/leasing_pic/agro.svg'
    },
    {
        name: 'Лизинг легковых автомобилей',
        percent: '20-40',
        time: 'От 1 до 5 лет',
        img: '/img/leasing_pic/asb.svg'
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
                .map((item) => this.getMessageHTML(item))
                .join("")
        }
      }
      getMessageHTML({ name, percent, time, img }) {
          return `
          <div class="credit">
                    <div class="credit_about">
                        <div class="credit_name">${name}</div>
                        <div class="credit_desc">
                            <div class="credit_time">
                                <div>${time}</div>
                                <div>срок кредита</div>
                            </div>
                            <div class="credit_percent">
                                <div>${percent}%</div>
                                <div>аванс</div>
                            </div>
                        </div>
                    </div>
                    <div class="credit_pic">
                        <img src="${img}" alt="leasing">
                    </div>
                    <div class="credit_buttons">
                        <button>Подать заявку</button>
                        <a href='/pages/credits/priorbankPage.html'>Подробнее</a>
                    </div>
                </div>
         `;
    }
}
const currentLeasings = new creditView("leasingList")
currentLeasings.display(leasings)

