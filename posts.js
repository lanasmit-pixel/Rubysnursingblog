/* ============================================================
   HOW TO ADD A NEW POST
   Weekly update: scroll to the WEEKLY UPDATES box below, paste a new
   block right under the ##### line, change the text, and commit.
   Monthly post: copy any block inside POSTS (further down) and paste
   it at the TOP of that list.
   Dates are YYYY-MM-DD. Never use patient names or identifying details.
   ============================================================ */

const PROFILE = {
  name: "Ruby Riley",
  role: "Nurse Tech, Cardiovascular Floor",
  place: "Corewell Health Meijer Heart Center, Grand Rapids, MI",
  blurb: "Pre-nursing student at Grand Valley State University (BS expected May 2029) and a certified nursing assistant. I write about what I'm learning at the bedside, in class, and everywhere in between."
};

const MILESTONES = [
  { date: "2021-06", text: "Started at Camzies Pizza, later promoted to supervisor" },
  { date: "2025-05", text: "Finished the Health and Human Services Academy at Battle Creek Central" },
  { date: "2025-06", text: "Completed my Nursing Assistant certification at Kellogg Community College" },
  { date: "2026-03", text: "Joined Corewell Health as a patient transporter" },
  { date: "2026-09", text: "Moved to the cardiovascular floor at the Meijer Heart Center" },
  { date: "2029-05", text: "Graduation, if all goes to plan" }
];

/* ##############################################################
   ##########     WEEKLY UPDATES  (newest on top)      ##########
   ##########  WRITE YOUR NEW UPDATE BELOW THIS LINE   ##########
   ############################################################## */

const WEEKLY = [
  // Copy this block, remove the // at the start of each line, and fill it in.
  // Put your newest block ABOVE the older ones. Keep the comma after the }.
  // {
  //   date: "2026-11-06",
  //   text: "Write here: what happened this week, what you learned, how you feel."
  // },

  {
    date: "2026-11-06",
    text: "Another full week on the cardiovascular floor. I'm getting faster at the routine tasks, which frees up my attention for noticing the little things, like a patient who has gotten quieter than usual. Next week I want to ask more questions during handoff."
  },
  {
    date: "2026-10-30",
    text: "Spent a lot of this week thinking about teamwork. Nobody on the unit gets through a shift alone, and I'm grateful for the nurses who explain the why behind what they ask me to do."
  },
  {
    date: "2026-10-23",
    text: "Balancing class, work, and sleep was tough this week. I'm trying to study in short blocks on my breaks and keep one evening completely free."
  },
  {
    date: "2026-10-16",
    text: "Practiced my vitals technique until it felt automatic: right cuff size, patient resting, numbers written down right away. Small habits, fewer mistakes."
  },
  {
    date: "2026-10-02",
    text: "Still thinking about our morning at the burial grounds. I keep reminding myself to listen to each patient's perspective before I decide what they need."
  },
  {
    date: "2026-09-19",
    text: "Week three on the heart floor. I finally stopped feeling lost in the hallway, and I learned where the supplies live, which is half the battle."
  }
];

/* ##############################################################
   ##########        END OF WEEKLY UPDATES             ##########
   ############################################################## */


/* MONTHLY POSTS (two a month). Copy a block and paste it at the top. */
const POSTS = [
  {
    date: "2026-10-24", tag: "Reflection",
    title: "Seven months in: what I'd tell my first-week self",
    body: [
      "I started at Corewell in March thinking my job was to get people from point A to point B. It turns out the job is everything that happens in between.",
      "If I could go back, I'd tell myself to slow down, ask the nurse why before asking how, and write down the one thing I didn't know every single shift. That list has been my best teacher."
    ],
    learned: "Curiosity is part of the job. Questions are welcome when they come from wanting to do right by the patient."
  },
  {
    date: "2026-10-10", tag: "On the floor",
    title: "Vitals, daily weights, and why the small numbers matter",
    body: [
      "On a heart floor, a number that looks boring can be the whole story. A daily weight that jumps overnight can be an early sign of fluid building up, which is why nurses want it done the same way, at the same time, every day.",
      "I used to think taking vitals was the easy part of the day. Now I take them like someone is going to make a decision with them, because someone is."
    ],
    learned: "Accurate beats fast. Report what you see, exactly as you see it, and tell the nurse right away when something feels off."
  },
  {
    date: "2026-09-27", tag: "Beyond the bedside",
    title: "A morning at the sacred burial grounds along the Grand River",
    body: [
      "Last Friday I went to a sacred burial grounds event for one of my honors courses. I was honestly unsure how much I'd enjoy it, but I knew a walk by the river would be good for me. Between school and work I haven't been outside much lately.",
      "Our guide, a Chief of the Grand River tribe, spoke about the site with so much meaning that the whole group went quiet. A highway was built over the mounds and cut them from eleven to four. People used to dump trash and appliances there, and tribe members came back every year to clean it up. I kept wondering why more of us never learned this history.",
      "He kept coming back to one word: perspective. I've been carrying it onto the floor with me. Every patient's room is a different point of view, and my job starts with listening before I assume."
    ],
    learned: "Respect begins with learning whose story a place or a person belongs to. Whoever you're caring for deserves that."
  },
  {
    date: "2026-09-12", tag: "Milestone",
    title: "My first weeks on the cardiovascular floor",
    body: [
      "This month I started as a nurse tech at the Meijer Heart Center in Grand Rapids. The learning curve is steep and I love it. Monitors, new equipment, and a whole new vocabulary, all while the unit keeps moving.",
      "What stands out most is the teamwork. Nurses, techs, and therapists all hand off small details to each other, and those handoffs keep patients safe."
    ],
    learned: "No one on the unit works alone. Clear, kind communication is a safety tool."
  },
  {
    date: "2026-08-22", tag: "Studying",
    title: "Learning the language of the heart",
    body: [
      "Before the move to cardiac care I made flashcards for words I kept overhearing: telemetry, arrhythmia, ejection fraction, heart failure. My plan was simple, learn one term a day and use it in a sentence out loud.",
      "I'm not going to pretend I understood everything at first. But knowing the words made me braver about asking good questions."
    ],
    learned: "Vocabulary is confidence. Learn it in small pieces, every day."
  },
  {
    date: "2026-08-08", tag: "School",
    title: "Juggling GVSU, honors, and a hospital schedule",
    body: [
      "Fall at Grand Valley is almost here. I'm in the Frederik Meijer Honors College and the Pre-Nursing Association, I'm working, and I'm trying to remember to eat lunch.",
      "My system this summer: one planner, one weekly reset on Sunday, and one night off from everything. It's not perfect, but it's mine."
    ],
    learned: "A schedule that has no rest in it isn't a plan. Protect the downtime on purpose."
  },
  {
    date: "2026-07-25", tag: "Patient care",
    title: "Listening is a clinical skill",
    body: [
      "Some of the best moments in transport happen in the elevator. A patient who is nervous about a test will often say so during the ride, if you let a little silence sit.",
      "My volunteering at the Literacy Center of West Michigan taught me something similar: people tell you what they need when they feel unhurried."
    ],
    learned: "Make eye contact, protect privacy, and let the other person finish the sentence."
  },
  {
    date: "2026-07-11", tag: "Volunteering",
    title: "Why I keep volunteering at Allendale Nursing and Rehab",
    body: [
      "Long-term care is where I first learned that nursing isn't only about emergencies. It's about dignity on an ordinary Tuesday: a warm conversation, a clean room, someone remembering how you like your tea.",
      "Residents have taught me patience, and a few good stories."
    ],
    learned: "Small routines matter most to people who spend their days inside them."
  },
  {
    date: "2026-06-20", tag: "Leadership",
    title: "What four years at a pizza shop taught me about nursing",
    body: [
      "I started at Camzies Pizza in 2021 and ended up supervising the shift. I know, pizza and patient care sound unrelated. But training new people, keeping a station sanitary, and staying calm during a rush all show up in a hospital too.",
      "The biggest transfer is the same lesson: when the team is steady, the customer, or the patient, feels it."
    ],
    learned: "Leadership is mostly reliability. Show up, stay calm, help the new person."
  },
  {
    date: "2026-06-06", tag: "Milestone",
    title: "One year since my CNA certification",
    body: [
      "A year ago this month I finished my Nursing Assistant course at Kellogg Community College. It was the first time I felt like I could actually help someone, not just want to.",
      "Looking back, the skills I use every day are not the fancy ones. They're hand hygiene, safe body mechanics, and noticing when someone looks uncomfortable."
    ],
    learned: "Master the basics. Everything advanced is built on them."
  },
  {
    date: "2026-05-23", tag: "On the floor",
    title: "Clean is a form of care",
    body: [
      "Part of my day is disinfecting wheelchairs, stretchers, oxygen tanks, and IV poles between patients. It isn't glamorous, but it is infection control, and infection control is patient safety.",
      "I've started thinking of every wipe-down as a small promise to the next person who'll use that equipment."
    ],
    learned: "Follow the cleaning steps every time, even when the hallway is busy."
  },
  {
    date: "2026-05-09", tag: "Getting started",
    title: "Two months of patient transport at Corewell",
    body: [
      "Since March I've been moving patients by wheelchair, stretcher, and bed all over the hospital. I'm learning the building, the safety protocols, and how to be a calm face during a stressful day.",
      "I wanted to start this blog to keep track of what I learn on the way to becoming a nurse. If you're a pre-nursing student too, say hi."
    ],
    learned: "Every patient trip is a short chance to make someone feel safe."
  }
];
