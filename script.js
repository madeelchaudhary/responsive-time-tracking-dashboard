const data = [
  {
    title: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "self care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const statBtns = document.querySelectorAll(".control-list-btn");

statBtns.forEach((btn) => {
  btn.addEventListener("click", statChanger);
});

function statChanger(e) {
  const statLabel = e.target.dataset.label;
  createStats(statLabel);
  statBtns.forEach((btn) => {
    if (btn === e.target) {
      btn.classList.remove("text-mute");
    } else {
      btn.classList.add("text-mute");
    }
  });
}

function createStats(label) {
  for (let stat of data) {
    const element = ` <h3 class="title card-timings">
       ${stat.timeframes[label].current}hrs
      </h3>
      <p class="text-small text-mute">
        Last Week - ${stat.timeframes[label].previous}hrs
      </p>`;
    const statCardElement = document.querySelector(
      `[data-stats="${stat.title}"]`
    );
    statCardElement.innerHTML = element;
  }
}

window.addEventListener("DOMContentLoaded", createStats.bind(null, "daily"));
