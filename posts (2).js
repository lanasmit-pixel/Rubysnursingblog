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
  { date: "2024-02", text: "Started as a host at Red Lobster" },
  { date: "2025-05", text: "Finished the Health and Human Services Academy at Battle Creek Central" },
  { date: "2025-06", text: "Completed my Nursing Assistant certification at Kellogg Community College" },
  { date: "2026-03", text: "Joined Corewell Health as a patient transporter" },
  { date: "2026-09", text: "Moved to the cardiovascular floor at the Meijer Heart Center" },
  { date: "2029-05", text: "Graduation from Grand Valley, if all goes to plan" }
];

/* ##############################################################
   ##########     WEEKLY UPDATES  (newest on top)      ##########
   ##########  WRITE YOUR NEW UPDATE BELOW THIS LINE   ##########
   ############################################################## */

const WEEKLY = [
  // Copy this block, remove the // at the start of each line, and fill it in.
  // Put your newest block ABOVE the older ones. Keep the comma after the }.
  // {
  //   date: "2026-11-13",
  //   text: "Write here: what happened this week, what you learned, how you feel."
  // },

  {
    date: "2026-11-06",
    text: "This week I noticed that I'm getting faster at the routine parts of my shift, which leaves me more room to pay attention to the patients themselves. I want to ask more questions during the next few shifts, since I'm still learning so much on the cardiovascular floor."
  },
  {
    date: "2026-10-30",
    text: "I kept thinking about teamwork this week. Working on a hospital floor reminded me a lot of my years at Camzies, where a busy rush only went well when everyone knew their part and helped each other out."
  },
  {
    date: "2026-10-23",
    text: "Balancing school, work, and my volunteering has been difficult lately. I'm trying to use short breaks to study and to leave at least one evening completely free, because I've noticed I do better work when I'm rested."
  },
  {
    date: "2026-10-16",
    text: "I spent time this week focusing on the basics: hand hygiene, keeping my equipment clean, and double checking my work. Nothing flashy, but those are the habits I learned in my nursing assistant course, and I want them to stay automatic."
  },
  {
    date: "2026-10-02",
    text: "I've been thinking about how much I enjoy hearing patients talk about their day. It makes the shift go by faster, and I think it makes them feel more comfortable too."
  },
  {
    date: "2026-09-19",
    text: "I'm about a week or so into the cardiovascular floor and it's a big adjustment. I felt unsure about how quickly I'd catch on, but the nurses have been patient and I'm finding my footing."
  }
  // ADD NEW WEEKLY UPDATES ABOVE THIS LINE, right under the ##### box heading.
];

/* ##############################################################
   ##########        END OF WEEKLY UPDATES             ##########
   ############################################################## */

/* MONTHLY POSTS (two a month). Copy a block and paste it at the top. */
const POSTS = [
  {
    date: "2026-10-24", tag: "Reflection",
    title: "Seven months at Corewell: what I've noticed so far",
    body: [
      "When I started at Corewell in March, I wasn't sure how much I would enjoy hospital work. I knew I wanted to be a nurse, but I hadn't spent every day in a hospital before. Looking back now, I'm glad I trusted that feeling of curiosity instead of waiting until I felt ready.",
      "What stood out to me most is how many small tasks go into taking good care of someone. Moving a patient safely, keeping equipment clean, and listening while someone talks all matter just as much as anything else I'll learn in school. Overall, I'm still new, but I can already tell this was the right place to start."
    ],
    learned: "You don't have to feel fully ready to begin. Showing up and paying attention teaches you the rest."
  },
  {
    date: "2026-10-10", tag: "On the floor",
    title: "Comfort and privacy are part of the job",
    body: [
      "One thing my nursing assistant training stressed was active listening, and I think I underestimated it at first. It sounds simple, but when a patient is nervous or in pain, being patient and giving them your full attention can change how they feel about the whole day.",
      "Privacy is the other piece I think about constantly. Even small things, like closing a curtain or lowering my voice in a hallway, show a patient that they are respected. I found that it also helps me stay calm, because I'm focusing on the person in front of me instead of rushing to the next task."
    ],
    learned: "Comfort and dignity are not extras. They are part of safe, good care."
  },
  {
    date: "2026-09-26", tag: "Milestone",
    title: "One year since I left Camzies Pizza",
    body: [
      "This month marks a year since I finished my time at Camzies, where I worked from June 2021 until September 2025. I started as a cook and was promoted to supervisor, which meant overseeing daily operations, food quality, inventory, and customer service. At the time it felt like a job I did to pay for things, but I realize now how much it shaped me.",
      "I learned how to train new coworkers, stay organized during a busy rush, and keep a workspace clean. I honestly didn't expect those skills to matter in healthcare, yet I use them every shift. It surprised me how much overlap there is."
    ],
    learned: "Skills carry over more than you expect. Leadership, organization, and sanitation matter in every workplace."
  },
  {
    date: "2026-09-12", tag: "Milestone",
    title: "Starting on the cardiovascular floor",
    body: [
      "This month I began working as a nurse tech on a cardiovascular floor at the Corewell Health Meijer Heart Center in Grand Rapids. After several months in patient transport, it feels like a big step toward the clinical experience I've been hoping to gain.",
      "I remember feeling nervous on my first day, mostly because I wasn't sure how much I would know. What I noticed quickly was how much everyone relies on each other. Nurses, techs, and other staff pass along small details constantly, and I found that comforting. I'm still learning, and I'm okay with that."
    ],
    learned: "Being new is uncomfortable, but a good team makes it easier. Ask questions early."
  },
  {
    date: "2026-08-22", tag: "Volunteering",
    title: "What the Literacy Center of West Michigan taught me",
    body: [
      "I've volunteered with the Literacy Center of West Michigan for a while now, and it might seem unrelated to nursing. But a lot of what I practice there, like explaining things clearly and being patient, applies directly to patient care.",
      "I found it admirable how much effort the learners put in, often while juggling jobs and families. It reminded me that people do their best when someone is willing to listen without rushing them. I hope to carry that attitude into every patient room."
    ],
    learned: "Clear, patient communication helps everyone, whether they're learning to read or learning about their health."
  },
  {
    date: "2026-08-08", tag: "School",
    title: "Getting ready for another semester at Grand Valley",
    body: [
      "I'm a member of the Frederik Meijer Honors College, the Pre-Nursing Association, and Women in Leadership at Grand Valley, and I'm working toward my Bachelor of Science, which I expect to finish in May 2029. With fall approaching, I've been thinking about how to fit it all together.",
      "Juggling classes, work, and activities hasn't left me much free time, and I'm still figuring out my system. For now, I'm trying to plan my weeks in advance and protect a little time to rest, because I know I can't be a good student or a good caregiver if I'm exhausted."
    ],
    learned: "A busy schedule only works if rest is on the calendar too."
  },
  {
    date: "2026-07-25", tag: "Lessons from work",
    title: "A year after Red Lobster: first impressions matter",
    body: [
      "I worked as a host at Red Lobster from February 2024 until July 2025, so this month marks a year since I left. It was a high-volume job, and I spent my shifts greeting guests, managing the seating chart, and keeping reservations running smoothly.",
      "At the time, I mostly thought about getting through the Friday night rush. Now I realize that welcoming people kindly, especially when they're hungry or impatient, is the same skill I use with patients who feel anxious. A warm first impression really does set the tone."
    ],
    learned: "People remember how you made them feel in the first thirty seconds."
  },
  {
    date: "2026-07-11", tag: "Volunteering",
    title: "Why I volunteer at Allendale Nursing and Rehab",
    body: [
      "Volunteering at Allendale Nursing and Rehab was one of the first times I got to see what long-term care is really like. I was drawn to it because I wanted to spend time with people and learn from them, not only study from a textbook.",
      "What I appreciate most is how much a short conversation can mean to a resident. It reminded me that nursing isn't only about procedures. It's also about being present, and I want to keep that in mind as I move through my career."
    ],
    learned: "Showing up and spending time with someone is a form of care."
  },
  {
    date: "2026-06-20", tag: "Leadership",
    title: "What I learned supervising at a pizza shop",
    body: [
      "I know it might sound strange to connect pizza to nursing, but being promoted to supervisor at Camzies taught me a lot about responsibility. I was in charge of daily operations, food quality, inventory prep, and keeping the kitchen sanitary, all while training new staff.",
      "Teaching someone a task made me understand it better myself. I also learned how to stay steady when things get busy, which I think will be useful in a hospital. I'm proud of how much I grew there."
    ],
    learned: "The best way to lead is to be reliable, patient with new people, and calm under pressure."
  },
  {
    date: "2026-06-06", tag: "Milestone",
    title: "One year since my nursing assistant certification",
    body: [
      "This June marks a year since I completed my Nursing Assistant course at Kellogg Community College. It came right after I finished the Health and Human Services Academy at Battle Creek Central High School in May 2025, so that stretch was a big turning point for me.",
      "I remember being excited and a little nervous to finally learn hands-on skills. Looking back, the things I use most are the basics, such as infection control and safe patient care. Overall, I'm grateful I started on this path early."
    ],
    learned: "Strong basics are what everything else is built on."
  },
  {
    date: "2026-05-23", tag: "On the floor",
    title: "Why cleaning equipment matters more than I thought",
    body: [
      "A big part of my role in patient transport is disinfecting equipment, including wheelchairs, stretchers, oxygen tanks, and IV poles. When I started, I thought of it as a chore, but I've come to see it as an important part of keeping patients safe.",
      "Meeting hospital sanitation standards takes consistency, even when the day is busy. I try to remind myself that the next patient is counting on me to do it right, and that makes it much easier to slow down and be thorough."
    ],
    learned: "Infection control is safety. Do the steps every time, even when no one is watching."
  },
  {
    date: "2026-05-09", tag: "Getting started",
    title: "Two months of patient transport at Corewell",
    body: [
      "In March I started working in patient transport at Corewell Health, and I decided to start this blog to keep track of what I'm learning. I'm studying toward a nursing career, and I wanted a place to reflect along the way.",
      "Each day I safely move patients by wheelchair, stretcher, and bed while following infection control and safety protocols. I was unsure how much I would enjoy it at first, but I've found that I love the conversations on the way. I hope you'll follow along as I learn."
    ],
    learned: "Every trip down the hall is a chance to make someone feel safe and heard."
  }
];
