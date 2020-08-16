const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum();


const database = {
  posts: [
    {
      id:1,
      title:"Student Stories: Mona",
      body: "Mona, from Iran, found herself in a small town in the north of the UK where she spent five years with her husband and their son as asylum seekers. As asylum seekers are not allowed to work, the combination of a long period of time spent outside of the labour market and differences in practices in her field of work in Iran, made it hard to get back into employment once she had the legal right to work in the UK. Mona ended up working in a laundry, and between a full-time job and looking after her son she didn’t feel there were many career prospects open to her. When a friend encouraged Mona to apply to do a course with Code Your Future, Mona was nervous and worried about being too old to study something completely new and not having enough time to keep up with the course. But her perseverance and the encouragement from CYF mentors helped her stick to the programme, graduate and to finally get her first job offer as a developer. Now Mona is a role-model not only for her son who is already making his first steps to learn coding, but for the rest of the family: her husband and her sister have also started to learn to code in their free time.",
      user_id:1,
      created_at:"2020-08-05",
      updated_at:"2020-08-05"
    },
    {
      id:2,
      title:"Volunteer Stories: Lucy",
      body: "A recent graduate from Manchester Met University, she lives in Manchester working as a graduate software engineer at the BBC in MediaCity, Salford. Lucy has worked on areas as diverse as the Voice+AI team to front end development on the Sport website. She first came across CodeYourFuture while in the middle of her industrial placement year. She wanted to learn more about User Experience, and using Meetup.com, researched opportunities there to learn about UX. She came across a CodeYourFuture event recruiting volunteers to run the very first Manchester class. Immediately she thought it would be a great way for her to use her skills and help others in a real, tangible way, meet new people with similar interests, and also develop her own skill set further. She went along to the event and has been involved ever since, over 12 months and counting! Let’s hear from Lucy herself about her experience. What have you been doing so far as a CodeYourFuture volunteer? When I first started I was mainly helping to teach the class and plan the Saturday classes with other volunteers. As time went on my role became more organisational, helping to make decisions and making sure other volunteers and students had what they needed in Saturday classes and online during the week. Throughout my time here I have tried to recruit as many volunteers as possible, presented at Meetup events and promoted the volunteering opportunities through social media. I’ve also spent time trying to increase recognition of CodeYourFuture within the volunteering and charity communities in Manchester and the North West. I helped to organise and coordinate the first CYF conference in Manchester in 2018, helping to find accommodation and catering for students and volunteers. More recently, my role has involved onboarding new volunteers into CYF Manchester and supporting volunteers across the education and personal development teams. Sounds like you’ve been busy Lucy! But I’m sure it hasn’t all been easy. Did you have any concerns before joining CodeYourFuture? What were they and how did you overcome them? Wy main concern was that I didn’t have the required skills (technical or otherwise) to be able to help effectively. As it was my first time volunteering and I had only been on my placement year for a few months, I had no other professional experience within tech. However, once I arrived and met the students and other volunteers, I began to feel more like I had something to contribute. At first, there was definitely an element of feeling out of my comfort zone, but I worked on taking small steps to build up my skills, from helping to answer questions to presenting full Saturday classes. I was also surrounded by a number of other volunteers who were very encouraging and we worked as a team to help and support each other.",
      user_id:1,
      created_at:"2020-07-20",
      updated_at:"2020-07-20"
    },
    {
      id:3,
      title:"Fighting inequality, one line of code at a time",
      body: "CodeYourFuture is not just any other coding school; we are a community with a mission to fight inequality. We support motivated individuals from the most disadvantaged groups – those who have limited access to training and opportunities and who are underrepresented in the tech sector.  It has never been more apparent how important it is to build pathways to opportunity for everyone in our society. Incredible teams of CodeYourFuture volunteers and partners help our students learn the technical and employability skills required for the modern workplace. Today, we want to celebrate three years of hard work by students, volunteers and partners through the successes of our students and their stories. Their words tell you what’s possible. Every student comes to us with their own unique story and struggles. We work with all of our students to remove the barriers they face and give them the opportunities to grow and thrive. One such student was Madiha, who now works at Capgemini:",
      user_id:2,
      created_at:"2020-03-09",
      updated_at:"2020-03-09"
     },
    {
      id:4,
      title:"Humans of Code Your Future: Yohannes",
      body: "Yohannes is a CodeYourFuture graduate, looking for his first tech job. Check out his GitHub here. I was born and brought up in Addis Ababa, Ethiopia. I’d studied some computer science, but I would say it wasn’t until I moved to Glasgow in 2016 joined the first Scottish class of Code Your Future that I became a programmer. Glasgow is a very welcoming place for refugees — I’ve been able to make friends and volunteer for a number of projects including Galgael Trust, Kinning Park Complex, Govan Community Project & Empowering Govan’s Communities. Having graduated Code Your Future in January, I’ve become a CYF mentor and I help our second class of students, who are just beginning their coding journey. Being a Code Your Future student was an excellent experience for me. There are always barriers to integration when you move to a new country and culture, but Code Your Future provides us with a vibrant community where not only do we learn valuable new skills for our future, we meet other people who are new to Scotland and we bond over our shared experiences. Through CYF, I’ve learned full-stack web development — HTML, CSS and JavaScript. We further learned ReactJS. For our final project, I built a Progressive Web App using React, Node and MongoDB for Kinning Park Complex. The project was a sustainable food map for Glasgow to help Glaswegians consume food ethically and in a way friendly to the environment. I have also been teaching myself React Native with the help of some mentors since the end of the course.",
      user_id:3,
      created_at:"2019-10-05",
      updated_at:"2019-10-05"
    }
  ],
  users: [
    {id:1, firstName:"Evan", lastName: "Rolfe", email: "evan@gmail.com"},
    {id:2, firstName:"Alice", lastName: "Smith", email: "alice@gmail.com"},
    {id:3, firstName:"Bob", lastName: "Johnson", email: "bob@gmail.com"},
  ]
}

module.exports = { database }
