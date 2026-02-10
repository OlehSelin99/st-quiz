const questions = [
  {
    id: 1,
    question: "Що зазвичай приваблює вас більше?",
    options: [
      {
        text: "Тусуватися на вечірці з друзями",
        score: { "Steve Harrington": 2, "Dustin Henderson": 1, Argyle: 1 },
      },
      {
        text: "Обговорювати різні ідеї з кількома близькими людьми",
        score: { "Will Byers": 1, "Mike Wheeler": 1, "Jonathan Byers": 1 },
      },
      {
        text: "Побути наодинці зі своїми думками",
        score: { Eleven: 2, Vecna: 1, "Max Mayfield": 1 },
      },
    ],
  },

  // {
  //   id: 2,
  //   question: "До чого ви маєте природну схильність?",
  //   options: [
  //     {
  //       text: "Створювати єдність та емоційну підтримку",
  //       score: { "Joyce Byers": 2, "Will Byers": 1, "Bob": 2 },
  //     },
  //     {
  //       text: "Виявляти логічні неузгодженості й долати заперечення",
  //       score: { "Jim Hopper": 1, "Nancy Wheeler": 1, "Brenner": 2 },
  //     },
  //     {
  //       text: "Шукати приховані сенси й уявляти речі з різних перспектив",
  //       score: { "Murray Bauman": 2, "Robin Buckley": 1, "Dustin Henderson": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   question: "Який набір речей дратує вас найбільше?",
  //   options: [
  //     {
  //       text: "Непередбачуваність і хаос (втрата контролю)",
  //       score: { "Jim Hopper": 1, "Nancy Wheeler": 1, "Brenner": 2, "Owens": 1 },
  //     },
  //     {
  //       text: "Лінь, слабкість та емоційна нестабільність",
  //       score: { "Steve Harrington": 1, "Billy": 2, "Erica": 1 },
  //     },
  //     {
  //       text: "Нудьга, рутина та нереалістичні люди",
  //       score: { "Max Mayfield": 2, "Dustin Henderson": 1, "Robin Buckley": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   question: "На чому ви зазвичай зосереджуєте свою увагу?",
  //   options: [
  //     {
  //       text: "На тому, що відбувається навколо вас (зовнішній світ)",
  //       score: { "Nancy Wheeler": 2, "Jim Hopper": 1, "Lucas Sinclair": 1, "Steve Harrington": 1 },
  //     },
  //     {
  //       text: "На ідеях або роздумах у вашій голові (внутрішній світ)",
  //       score: { "Will Byers": 2, "Eleven": 1, "Vecna": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   question: "Ви схильні…",
  //   options: [
  //     {
  //       text: "Думати вголос та обговорювати думки",
  //       score: { "Dustin Henderson": 2, "Steve Harrington": 1, "Mike Wheeler": 1, "Robin Buckley": 1 },
  //     },
  //     {
  //       text: "Обдумувати все про себе перед тим, як сказати",
  //       score: { "Will Byers": 2, "Eleven": 1, "Jonathan Byers": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   question: "Що більше вам підходить?",
  //   options: [
  //     {
  //       text: "Я звертаю увагу на деталі, мислю практично й тверезо",
  //       score: { "Nancy Wheeler": 2, "Jim Hopper": 1, "Lucas Sinclair": 1, "Brenner": 1 },
  //     },
  //     {
  //       text: "Я мислю образами, люблю креатив і бачу «велику картину»",
  //       score: { "Will Byers": 2, "Robin Buckley": 1, "Eddie": 1, "Eleven": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 7,
  //   question: "На чому ви більше зосереджуєтеся?",
  //   options: [
  //     {
  //       text: "На відчутному досвіді (спорт, техніка, факти)",
  //       score: { "Jim Hopper": 2, "Nancy Wheeler": 1, "Steve Harrington": 1, "Max Mayfield": 1 },
  //     },
  //     {
  //       text: "На абстрактних можливостях, теоріях та гіпотезах",
  //       score: { "Will Byers": 2, "Eleven": 1, "Murray Bauman": 1, "Vecna": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 8,
  //   question: "Яка ваша найбільш природна навичка?",
  //   options: [
  //     {
  //       text: "Підтримувати, надихати та піклуватися про інших",
  //       score: { "Joyce Byers": 2, "Mike Wheeler": 1, "Bob": 1 },
  //     },
  //     {
  //       text: "Аналізувати дані, будувати стратегії та розв'язувати задачі",
  //       score: { "Murray Bauman": 1, "Nancy Wheeler": 1, "Erica": 2, "Brenner": 1 },
  //     },
  //     {
  //       text: "Створювати затишок, стабільність і дотримуватися традицій",
  //       score: { "Karen Wheeler": 3, "Owens": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 9,
  //   question: "На чому ви зосереджуєтеся найбільше?",
  //   options: [
  //     {
  //       text: "На реальності: що робити тут і зараз",
  //       score: { "Jim Hopper": 2, "Nancy Wheeler": 1, "Lucas Sinclair": 1 },
  //     },
  //     {
  //       text: "На ідеях: як світ міг би виглядати",
  //       score: { "Murray Bauman": 2, "Robin Buckley": 1, "Dustin Henderson": 1 },
  //     },
  //     {
  //       text: "На людях: стосунки, почуття, спогади",
  //       score: { "Joyce Byers": 2, "Mike Wheeler": 1, "Bob": 2 },
  //     },
  //   ],
  // },

  // {
  //   id: 10,
  //   question: "Коли вам потрібно ухвалити рішення, на що ви спираєтесь?",
  //   options: [
  //     {
  //       text: "На факти, логіку та холодний розрахунок",
  //       score: { "Nancy Wheeler": 2, "Murray Bauman": 1, "Brenner": 1, "Owens": 2 },
  //     },
  //     {
  //       text: "На інтуїцію, цінності та почуття людей",
  //       score: { "Eleven": 2, "Joyce Byers": 1, "Will Byers": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 11,
  //   question: "Яку діяльність ви обираєте для відпочинку?",
  //   options: [
  //     {
  //       text: "Активний спорт, змагання або прогулянки",
  //       score: { "Lucas Sinclair": 2, "Max Mayfield": 2, "Steve Harrington": 1 },
  //     },
  //     {
  //       text: "Спокійний вечір удома з книгою чи фільмом",
  //       score: { "Jonathan Byers": 2, "Karen Wheeler": 2, "Will Byers": 1 },
  //     },
  //     {
  //       text: "Гучну вечірку або гру в компанії",
  //       score: { "Eddie": 2, "Argyle": 2, "Dustin Henderson": 1 },
  //     },
  //     {
  //       text: "Роботу над власним проєктом або бізнесом",
  //       score: { "Erica": 2, "Murray Bauman": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 12,
  //   question: "Як ви ставитеся до правил?",
  //   options: [
  //     {
  //       text: "Правила існують, щоб їх порушувати",
  //       score: { "Billy": 3, "Eddie": 2, "Argyle": 1 },
  //     },
  //     {
  //       text: "Правила корисні, але іноді їх треба обійти заради добра",
  //       score: { "Lucas Sinclair": 1, "Max Mayfield": 1, "Jim Hopper": 1 },
  //     },
  //     {
  //       text: "Правила — це основа порядку і безпеки",
  //       score: { "Karen Wheeler": 2, "Owens": 3, "Brenner": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 13,
  //   question: "Що для вас означає успіх?",
  //   options: [
  //     {
  //       text: "Влада, сила та контроль над ситуацією",
  //       score: { "Vecna": 3, "Billy": 2, "Brenner": 1 },
  //     },
  //     {
  //       text: "Щаслива родина та безпека близьких",
  //       score: { "Bob": 3, "Joyce Byers": 2, "Karen Wheeler": 1 },
  //     },
  //     {
  //       text: "Знання, відкриття та інтелектуальний розвиток",
  //       score: { "Erica": 1, "Robin Buckley": 1, "Dustin Henderson": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 14,
  //   question: "Як ви реагуєте на сильний стрес?",
  //   options: [
  //     {
  //       text: "Беру все під жорсткий контроль і відсторонююсь емоційно",
  //       score: { "Brenner": 3, "Murray Bauman": 1, "Vecna": 1 },
  //     },
  //     {
  //       text: "Шукаю підтримки у друзів, щоб вирішити проблему разом",
  //       score: { "Mike Wheeler": 2, "Joyce Byers": 1, "Will Byers": 1 },
  //     },
  //     {
  //       text: "Виплескую енергію через дії (спорт, агресія, рух)",
  //       score: { "Lucas Sinclair": 2, "Billy": 1, "Steve Harrington": 1 },
  //     },
  //     {
  //       text: "Замикаюся в собі або тікаю у світ фантазій",
  //       score: { "Eleven": 2, "Jonathan Byers": 1, "Eddie": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 15,
  //   question: "Що ви найбільше цінуєте у дружбі?",
  //   options: [
  //     {
  //       text: "Лояльність і вірність обов'язку",
  //       score: { "Owens": 2, "Erica": 1, "Mike Wheeler": 1 },
  //     },
  //     {
  //       text: "Веселощі, драйв та спільні пригоди",
  //       score: { "Eddie": 2, "Argyle": 2, "Dustin Henderson": 1 },
  //     },
  //     {
  //       text: "Глибоке розуміння та можливість бути справжнім",
  //       score: { "Jonathan Byers": 2, "Will Byers": 1, "Robin Buckley": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 16,
  //   question: "Що для вас зазвичай є складнішим?",
  //   options: [
  //     {
  //       text: "Багатозадачність або коли вас постійно відволікають",
  //       score: { "Nancy Wheeler": 1, "Jim Hopper": 1, "Brenner": 2, "Vecna": 1 },
  //     },
  //     {
  //       text: "Монотонно доводити одну справу до кінця",
  //       score: { "Dustin Henderson": 2, "Robin Buckley": 1, "Eddie": 1, "Argyle": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 17,
  //   question: "Як ви зазвичай працюєте над завданнями?",
  //   options: [
  //     {
  //       text: "Методично, за планом, крок за кроком",
  //       score: { "Nancy Wheeler": 1, "Lucas Sinclair": 1, "Erica": 1, "Vecna": 2 },
  //     },
  //     {
  //       text: "Імпульсивно, хвилями натхнення",
  //       score: { "Dustin Henderson": 2, "Robin Buckley": 1, "Jonathan Byers": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 18,
  //   question: "Який ваш погляд на світ?",
  //   options: [
  //     {
  //       text: "Реалістичний: факти, деталі, докази",
  //       score: { "Nancy Wheeler": 2, "Jim Hopper": 1, "Murray Bauman": 1 },
  //     },
  //     {
  //       text: "Мрійливий: я більше довіряю передчуттям та думаю про те, що буде завтра",
  //       score: { "Will Byers": 1, "Eleven": 1, "Vecna": 2, "Robin Buckley": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 19,
  //   question: "Про що вам цікавіше говорити?",
  //   options: [
  //     {
  //       text: "Про життя, людей, події та стосунки",
  //       score: { "Joyce Byers": 1, "Steve Harrington": 2, "Max Mayfield": 1, "Bob": 1 },
  //     },
  //     {
  //       text: "Про науку, теорії, фантастику та технології",
  //       score: { "Dustin Henderson": 2, "Murray Bauman": 2, "Will Byers": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 20,
  //   question: "Ваше ставлення до планування дня:",
  //   options: [
  //     {
  //       text: "Люблю чіткий графік і порядок",
  //       score: { "Nancy Wheeler": 1, "Erica": 1, "Brenner": 2, "Karen Wheeler": 1 },
  //     },
  //     {
  //       text: "Пливу за течією, спонтанність — це весело",
  //       score: { "Argyle": 3, "Eddie": 2, "Dustin Henderson": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 21,
  //   question: "Що перемагає у суперечці?",
  //   options: [
  //     {
  //       text: "Логіка, статистика та об'єктивні факти",
  //       score: { "Nancy Wheeler": 1, "Murray Bauman": 2, "Erica": 1, "Brenner": 1 },
  //     },
  //     {
  //       text: "Емоції, мораль та людський фактор",
  //       score: { "Joyce Byers": 2, "Will Byers": 1, "Eleven": 1, "Bob": 2 },
  //     },
  //   ],
  // },

  // {
  //   id: 22,
  //   question: "Ви в новій компанії. Ваші дії?",
  //   options: [
  //     {
  //       text: "Я в центрі уваги, жартую та знайомлюся",
  //       score: { "Steve Harrington": 2, "Eddie": 1, "Billy": 2 },
  //     },
  //     {
  //       text: "Спостерігаю збоку, поки не відчую комфорт",
  //       score: { "Jonathan Byers": 2, "Will Byers": 1, "Eleven": 1, "Max Mayfield": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 23,
  //   question: "Що мотивує вас найбільше?",
  //   options: [
  //     {
  //       text: "Пошук істини (я хочу знати правду)",
  //       score: { "Nancy Wheeler": 2, "Murray Bauman": 1, "Dustin Henderson": 1 },
  //     },
  //     {
  //       text: "Захист близьких (я хочу вберегти їх)",
  //       score: { "Joyce Byers": 2, "Jim Hopper": 2, "Steve Harrington": 1, "Bob": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 24,
  //   question: "Конфлікт неминучий. Що робите?",
  //   options: [
  //     {
  //       text: "Атакую! Висловлюю все в обличчя",
  //       score: { "Max Mayfield": 2, "Billy": 3, "Erica": 1, "Jim Hopper": 1 },
  //     },
  //     {
  //       text: "Згладжую кути або шукаю компроміс",
  //       score: { "Bob": 2, "Karen Wheeler": 2, "Mike Wheeler": 1, "Will Byers": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 25,
  //   question: "Критика на вашу адресу:",
  //   options: [
  //     {
  //       text: "Корисна інформація. Аналізую та виправляю",
  //       score: { "Nancy Wheeler": 1, "Brenner": 2, "Robin Buckley": 1 },
  //     },
  //     {
  //       text: "Болючий удар. Можу розсердитися або образитися",
  //       score: { "Steve Harrington": 1, "Billy": 2, "Will Byers": 2 },
  //     },
  //   ],
  // },

  // {
  //   id: 26,
  //   question: "Кому довірите вирішення проблеми?",
  //   options: [
  //     {
  //       text: "Тим, хто має досвід і діє за протоколом",
  //       score: { "Jim Hopper": 1, "Owens": 2, "Karen Wheeler": 1 },
  //     },
  //     {
  //       text: "Божевільним геніям з нестандартними ідеями",
  //       score: { "Dustin Henderson": 2, "Murray Bauman": 1, "Eleven": 1, "Eddie": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 27,
  //   question: "Після гучної вечірки ви...",
  //   options: [
  //     {
  //       text: "Заряджені енергією, хочеться продовжувати",
  //       score: { "Steve Harrington": 1, "Argyle": 2, "Eddie": 1 },
  //     },
  //     {
  //       text: "Втомлені, хочеться тиші та спокою",
  //       score: { "Jonathan Byers": 2, "Will Byers": 1, "Eleven": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 28,
  //   question: "Головне в житті — це:",
  //   options: [
  //     {
  //       text: "Результат, перемога та досягнення мети",
  //       score: { "Lucas Sinclair": 2, "Vecna": 3, "Erica": 1, "Brenner": 1 },
  //     },
  //     {
  //       text: "Процес, гра та емоції від шляху",
  //       score: { "Dustin Henderson": 1, "Eddie": 2, "Argyle": 1 },
  //     },
  //   ],
  // },

  // {
  //   id: 29,
  //   question: "Як ви приймаєте доленосні рішення?",
  //   options: [
  //     {
  //       text: "Розумом: зважую всі ризики та вигоду",
  //       score: { "Nancy Wheeler": 1, "Brenner": 2, "Murray Bauman": 1, "Owens": 1 },
  //     },
  //     {
  //       text: "Серцем: довіряю інстинкту та почуттям",
  //       score: { "Eleven": 3, "Jim Hopper": 1, "Max Mayfield": 1, "Joyce Byers": 1 },
  //     },
  //   ],
  // },
];

export default questions;
