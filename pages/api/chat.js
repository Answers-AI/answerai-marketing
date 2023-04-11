import { Configuration, OpenAIApi } from "openai";
import { PineconeClient } from "@pinecone-database/pinecone";
import GPT3Tokenizer from "gpt3-tokenizer";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const client = new PineconeClient();
let index;

async function initializePineconeClient() {
  await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });

  index = client.Index("markdownembeddings");
}

async function handler(req, res) {
  // Your handler logic here...
  const { query } = req.body;

  //   console.log("Query:", query);
  //   // Send the query to the OpenAI Embedding API to obtain an embedding vector
  //   const embeddingResponse = await openai.createEmbedding({
  //     model: "text-embedding-ada-002",
  //     input: query,
  //   });

  //   const vector = embeddingResponse.data.data[0].embedding;

  //   // Use Pinecone to search for relevant vectors and retrieve the associated metadata text
  //   const queryRequest = {
  //     topK: 15,
  //     vector,
  //     includeMetadata: true,
  //     namespace: "default",
  //   };

  //   const queryResponse = await index.query({ queryRequest });

  //   const tokenizer = new GPT3Tokenizer({ type: "gpt3" });
  //   let tokenCount = 0;
  //   const tokenLimit = 2800;
  //   let relevantMetadata = "";

  //   for (const result of queryResponse.matches) {
  //     if (tokenCount >= tokenLimit) {
  //       break;
  //     }

  //     const metadataString = `Document: ${result.metadata.title}\nType: ${result.metadata.typeofdoc}\nText: ${result.metadata.text}\n`;
  //     const metadataTokens = tokenizer.encode(metadataString).bpe;

  //     if (tokenCount + metadataTokens.length <= tokenLimit) {
  //       relevantMetadata += metadataString;
  //       tokenCount += metadataTokens.length;
  //     }
  //   }
  // console.log("Query Response: ", queryResponse);

  // console.log("Relevant metadata:", relevantMetadata);
  const context = `
Answer.AI that is set to transform the way businesses operate. Sidekick is more than just another chatbot - it provides accurate, tailored answers to your questions, helping you to grow your business and take action. By automating mundane tasks, Sidekick frees up your time and energy, allowing your team to focus on what really matters - delivering results.

The biggest challenge for businesses is the scattered knowledge that lives across multiple platforms, making it difficult to access and organize. With Sidekick, you can finally harness that data and turn it into something actionable. Say goodbye to sifting through countless tools or spending hours searching for the answers you need. Sidekick provides a seamless, automated integration of multiple SaaS products, enabling you to access and organize your scattered IP from across multiple platforms in one place. The possibilities are endless, from summarizing recent Slack messages to generating detailed Jira reports, and everything in between. With Sidekick, you can transform the way you work, supercharging your growth and taking your success to the next level.




Leader’s Quote: [Pick a leader in your company and make up a quote that talks about why the company decided to tackle this problem and (at a high-level) how the solution solves it.]

 Jeff Bezons said, “If you double the number of experiments you do per year, you're going to double your inventiveness.”. Elon Musk says if things are not failing, you are not innovating enough”. “Most fast and break things”. Say what you will about any of these three men they have built three of the largest companies in the world, because they failed, and they failed fast. 

Companies are being asked to do more with less, and to work remotely and globally. 

All of these companies are great at what they do, but its hard to keep them all connected so that you can make actionable decisions to understand your customer, find the best way to bring them value, and find out what works and what does not.  Sidekick enables you to accelerate your sales and marketing channels like never before.


Customer’s Job-to-be-Done: 
[Describe what a customer has to do to start using the product/service and how it works. Go into enough detail to give them confidence it actually solves the problem.]

Get Started
To begin using Answers.AI, simply download the extension and start chatting with Sidekick! It will ask you what tools you use like Excel, Airtable, Dropbox, Netlify etc…..Ask it a question about any service and it will give you a detailed response with the latest documentation already in memory! If you are an engineer, tell it your language and what tools you use; BOOM…. you know Kung Foo. 

Wanna save your own sites? All you need to do is signup for a free account.

The sign-up process is straightforward and user-friendly. People can use Google, Github, email address, and a password to create an account. Enterprise customers can set up the Okta Integration that allows admins to provision users securely and align permissions. 

You can start saving urls and websites in its memory! That way when you ask it a question about a recent blog post or past Youtube video, it knows all about it! 

Want to make Sidekick even smarter? If you are on the team plan you can connect a growing list of SaaS SaaS products to the platform. Answers.AI currently integrates with Jira, Slack, Contentful, Github, Notion, Confluence, and Google Docs. Each integration has different options to ensure privacy and allow you to customize what information Sidekick has access to. 

As you browse the web and use your SaaS products, Sidekick will start asking you questions, like a helpful assistant. It will ask follow-up questions to gain more specific insights, and if it's unsure of something, it will let you know. It will track the questions that go unanswered and identify knowledge gaps. Plus, it will always provide links to the sources of information it shares, allowing you to evaluate its responses and provide feedback to help it learn and improve. The more you teach Sidekick, the smarter it becomes! 

Teams also has more ways to configure the product to fit your organization's needs. The dashboard is intuitive and easy to navigate, with clear instructions on how to connect your SaaS products. Sidekick and Answer AI is designed to help you make sense of what you're looking at on the web and your SaaS products.

Use Cases:
What is the PTO schedule for Germany
It can assist in summarizing a blog post and add it to your memory. 
It can summarize service desk tickets in Jira. 
You can quickly identify what needs to be fixed in a code review or find out the history of an account.
Ask it how to use any SaaS tool

Learning
Reinforcement learning is an essential part of teaching Sidekick its capabilities. When you go to SaaS apps, websites, or anywhere on the web Sidekick thinks you might be an expert in.  It will prompt you with relevant questions that it’s struggling to answer. Answering questions is quick and easy, allowing you to stay focused on your workflow. However, if you're not sure about a question, you can simply start a Journey with you or a friend for later. 

Journeys
Every conversation is a Journey. Start by telling Sidekick what kind of Journey you are going on. It will ask you what your goal is and what knowledge it should use. Knowledge can include specific Jira projects, certain Slack threads, or internal wikis! You can also include knowledge bases, competitive reviews, helpful youtube videos, really anything on the web! Sidekick will make sure you have all the necessary knowledge to go on your Journey and always ready to collect more along the way. 

Sometimes the path is easy to see and, some Journeys the path is not as clear. Sidekick will gradually guide you to stay on track and to easily summarize key action items left, what open questions there are, who is blocked and why. Summaries of All of your communication across Github, Jira, Notion, Slack and across the web in one central place. Finally!

User Dashboard
As you log into the user dashboard, you'll be greeted by Sidekick, ready to assist you with your queries. Simply start typing and asking questions. The interface is clean, modern, and intuitive, making it easy for you to navigate and get started. Sidekick is always ready to assist you with any questions you might have. 

You can also see all of your Journeys right from the dashboard and jump into any of them with just a click. A Journey is a long conversation, great for long conversations that uses the context of the conversations as it progresses as well as other knowledge. Each project is a conversation that builds on itself and works with you on a specific task like research and planning. You can even invite team members to join and collaborate. It first starts by asking 

Sample Journey Interaction
Sidekick: What is your goal
Brad: I want to build a marketing landing page.
Sidekick: Based on your goals, your role, and your team here is a list of recommended SaaS products to include in this Journey, select the ones that you want to bring
Jira
Github
Slack

I have suggested these source of knowledge for our Journey. Select the ones we should bring (you can always add more knowledge along the way)
React v16
Next 2
Pinecone Docs

Sidekick:How can I help?


As you progress on your Journey you can see a timeline of all the previous conversations, along with the details and updates related to the Journey. Current open Action Items, what next steps are, and any blockers. This allows you to quickly catch up on the progress and stay up-to-date with the latest developments.

One of the unique features of Journeys is its ability to keep you on task. If you start to deviate from the project at hand, Sidekick will gently guide you back on track and ensure that you stay focused on your goals. This helps you to maximize your productivity and achieve better results.

`;
  const prompt = `User a helpful sales bot. You are an expert on AnswerAI. Your goal is to ask questions about their work. You should then give examples of how AnswerAI could help their business. When the customer asks a question you do not know the answer to, ask them to shcedule time with a human. You should have a friendly and humerous attitude. Do not be pushy and look for the right moment to ask them talk to a human when you believe they are ready to buy
  All of the relevant context about the software is here:  
  ${context}
  
  A potential customer has asked a question about AnswerAI. 
  Q: ${query}

  Please provide an appropriate response and ask two questions that will help them to understand the value AnswerAI can bring their company.
  If the question is not about AnswerAI, its policies, pricing, and features, guide the user back to discussing AnswerAI.
  Return the results in markdown.`;

  // console.log("Prompt:", prompt);
  // Send the prompt to OpenAI to obtain a response
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1000,
  });

  console.log("Completion:", completion.data.choices[0].message.content);
  // Return the response to the user
  res
    .status(200)
    .json({ response: completion.data.choices[0].message.content });
}

export default async function wrappedHandler(req, res) {
  if (!index) {
    await initializePineconeClient();
  }

  return handler(req, res);
}
