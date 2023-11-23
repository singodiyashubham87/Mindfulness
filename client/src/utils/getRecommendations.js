import openai from "./getOpenAi";

let system = `You are a psychology expert from india.`; 

let user = `My username is : Master Mickey
My assessment score is : 2

Now consider yourself a psychology expert from india.
I have given a pyschology assessment test which was having 20 questions and after submitting the assessment I got an assessment score.
The range of assessment score is between 0 and 5, where 0 score refers to mentally ill or stressed person and 5 refers to perfectly mentally fit person.
The mental health level increases with increase in the assessment score from 0 to 5.
The mental health level are like this: 
Level 1: Score > 0 and Score < 1 then too much stress level
Level 2: Score > 1 and Score < 2 then too moderate stress level
Level 3: Score > 2 and Score < 3 then too normal stress level
Level 4: Score > 3 and Score < 4 then not much stress
Level 5: Score > 4 and Score < 5 then no stress at all
You have to provide me recommendation to improve my mental health level according to the assessment score in 3 bullet points and each bullet point should have a recommendation with max words limit 25.
Give different recommendations according to different mental health levels
Don't give Helpline Number if score is greater than 3

Also provide test result status according to the assessment score, the test result status will be like this: Little or no Stress, Moderate amount of Stress, High stress level, etc.

Return output in this manner with square brackets too -
[
  [Hey <user name>!]
  [Your assessment score is : <score>]
  [Result Status : <status>]
  [Recommendation 1: <recommendation>]
  [Recommendation 2: <recommendation>]
  [Recommendation 3: <recommendation>]
  [Helpline Number: <mental health helpline number>]
  [Book to read: <mental health book>]
]
`

const getRecommendations = async ()=>{
  const res = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: system,
        role: "user",
        content: user,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return res.choices[0].message.content;
}

export default getRecommendations;
