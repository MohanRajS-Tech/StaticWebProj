
import { Chrono } from "react-chrono";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Chrono.css";
import stage1 from './assets/images/Stage 1 Data Generation.png';
import stage2 from './assets/images/Stage 2 Data Ingestion.png';
import stage3 from './assets/images/Stage 3 Secure Transmission.png';
import stage4 from './assets/images/Stage 4 Processing & Cleaning.png';
import stage5 from './assets/images/Stage 5 Data Storage.png';
import stage6 from './assets/images/Stage 6 Data Analysis.png';
import stage7 from './assets/images/Stage 7 Machine Learning.png';
import stage8 from './assets/images/Stage 8 Data Visualization.png';
import stage9 from './assets/images/Stage 9 Insight & Decision.png';
import stage10 from './assets/images/Stage 10 Action & Automation.png';
import stage11 from './assets/images/Stage 11 Archival & Deletion.png';


const STAGES = [
  {
    title: "Data Generation",
    subtitle: "The Spark of Information",
    detail: "Every click, tap, and sensor reading creates a new data point, forming the initial spark in the data lifecycle.",
    gifUrl: stage1,
    realWorldExample: "You just tapped 'like' on a new song on the BeatStream app. Right there, a piece of data was born: User#123 liked Song#567 at 8:02 PM.",
    didYouKnow: "Every day, humans create over 2.5 quintillion bytes of data. That's so much that 90% of the data in the world today has been generated in just the last two years!"
  },
  {
    title: "Data Ingestion",
    subtitle: "Collecting the Raw Fuel",
    detail: "Data is gathered from diverse sources—like apps, IoT devices, and logs—and brought into a central staging area.",
    gifUrl: stage2,
    realWorldExample: "Your 'like' event, along with millions of others from users worldwide, streams into BeatStream's central system. It's the main entry point where all raw data is collected.",
    didYouKnow: "The world's first massive data ingestion project was arguably the 1890 US Census, which used punch cards to tabulate data, reducing a 10-year manual process to just one year."
  },
  {
    title: "Secure Transmission",
    subtitle: "The Armored Convoy",
    detail: "Data is encrypted and securely moved from its source to the processing environment, protecting it from interception.",
    gifUrl: stage3,
    realWorldExample: "From the moment you tapped 'like', that data was encrypted. It traveled securely from your phone to BeatStream's servers, ensuring your listening habits remain private.",
    didYouKnow: "The 'S' in HTTPS stands for 'Secure.' When you see that padlock in your browser, it means your data is being encrypted using technology first developed by Netscape back in 1994 to protect online transactions."
  },
  {
    title: "Processing & Cleaning",
    subtitle: "Refining the Raw Material",
    detail: "Raw data is transformed, standardized, and cleansed of errors to ensure it's accurate and ready for analysis.",
    gifUrl: stage4,
    realWorldExample: "BeatStream's system automatically standardizes the data. It converts the timestamp of your 'like' to a universal time format (UTC) and validates your user ID, ensuring the data is clean and consistent for analysis.",
    didYouKnow: "Data scientists report that this 'data janitor work' can take up to 80% of their time. It's often the most time-consuming but also the most critical step for accurate results."
  },
  {
    title: "Data Storage",
    subtitle: "The Digital Vault",
    detail: "Processed data is stored in a secure, scalable, and reliable database or data warehouse for future access.",
    gifUrl: stage5,
    realWorldExample: "Your clean 'like' event is now stored in BeatStream's massive database. It's cataloged with your user profile, the song's genre, and the artist, ready to be accessed.",
    didYouKnow: "The concept of a 'data warehouse,' a central repository of information for analysis, was first introduced by IBM researchers in the late 1980s."
  },
  {
    title: "Data Analysis",
    subtitle: "Uncovering Hidden Patterns",
    detail: "Analysts and data scientists query the data, looking for trends, correlations, and insights that can drive decisions.",
    gifUrl: stage6,
    realWorldExample: "An analyst at BeatStream queries the database and discovers a pattern: 70% of users who liked this song also like another specific artist. This is a new discovery.",
    didYouKnow: "In 1854, Dr. John Snow used data analysis to stop a cholera outbreak in London. By mapping the cases, he identified a single contaminated water pump as the source, saving countless lives."
  },
  {
    title: "Machine Learning",
    subtitle: "Teaching the Data to Predict",
    detail: "Algorithms are trained on the data to create models that can forecast future outcomes and identify anomalies.",
    gifUrl: stage7,
    realWorldExample: "This discovery is fed into BeatStream's recommendation algorithm. The algorithm learns this connection and is trained to predict that other fans of the first song will probably enjoy the second artist too.",
    didYouKnow: "The term 'Machine Learning' was coined in 1959 by Arthur Samuel, who created an IBM checkers program that could learn from its own mistakes and improve its game over time."
  },
  {
    title: "Data Visualization",
    subtitle: "Telling the Story with a Chart",
    detail: "Insights are transformed into charts, graphs, and dashboards, making complex information easy to understand.",
    gifUrl: stage8,
    realWorldExample: "A marketing manager at BeatStream looks at a dashboard. A map of the world visually shows that the song is trending most in Brazil, helping them decide where to focus advertising.",
    didYouKnow: "Florence Nightingale was a brilliant data visualizer. She created a 'polar area diagram' to show that more soldiers were dying from poor sanitation than battle, convincing the government to improve hospital conditions."
  },
  {
    title: "Insight & Decision",
    subtitle: "The Moment of Clarity",
    detail: "Stakeholders use the visualized data to make informed, data-driven decisions that shape business strategy.",
    gifUrl: stage9,
    realWorldExample: "Seeing the strong connection between the two artists, the content team at BeatStream makes a decision: 'Let's create a new featured playlist called \'Indie Discovery\' with both of them.'",
    didYouKnow: "Netflix famously used data insights to produce 'House of Cards.' They saw that their users liked Kevin Spacey films and the original UK series, so they made a data-driven bet of $100 million on the show."
  },
  {
    title: "Action & Automation",
    subtitle: "Putting Insights to Work",
    detail: "Decisions trigger automated actions, such as sending alerts, adjusting system parameters, or launching new processes.",
    gifUrl: stage10,
    realWorldExample: "The next day, you open the BeatStream app. The system automatically features the new 'Indie Discovery' playlist on your homepage. This action was triggered by the data insights.",
    didYouKnow: "One of the first major commercial automation systems was 'SABRE,' the airline reservation system built for American Airlines in the 1960s, which automated a process previously done entirely by hand."
  },
  {
    title: "Archival & Deletion",
    subtitle: "The End of the Line",
    detail: "Data that is no longer needed is securely archived for compliance or permanently deleted to manage storage costs.",
    gifUrl: stage11,
    realWorldExample: "After five years, your 'like' event is no longer needed for daily recommendations. BeatStream moves it to a cheaper 'archive' storage. If you delete your account, they will permanently erase this personal data.",
    didYouKnow: "The GDPR law in Europe gives people the 'Right to be Forgotten,' which legally requires companies to delete personal data when it's no longer needed, making data deletion a critical part of the lifecycle."
  },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  // Effect to preload images
  useEffect(() => {
    STAGES.forEach(stage => {
      const img = new Image();
      img.src = stage.gifUrl;
    });
  }, []);

  // Effect to run the slideshow
  useEffect(() => {
    let timer;
    if (isPlaying && activeItemIndex < STAGES.length - 1) {
      timer = setInterval(() => {
        setActiveItemIndex(prevIndex => prevIndex + 1);
      }, 3000);
    } else if (activeItemIndex === STAGES.length - 1 && isPlaying) {
      // Reached the end, so stop playing
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeItemIndex]);

  // Effect to scroll the active item into view and manage active class
  useEffect(() => {
    // First, find all card elements
    const allCards = document.querySelectorAll('.vertical-item-row');

    // Remove the 'active' class from all of them
    allCards.forEach(card => card.classList.remove('active'));

    // If there's no active index, we're done.
    if (activeItemIndex === null) return;

    const activeCard = allCards[activeItemIndex];
    if (activeCard) {
      // Add the active class to the correct card
      activeCard.classList.add('active');

      // Scroll it into view
      activeCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  }, [activeItemIndex]);

  const items = STAGES.map(stage => ({
    title: stage.title,
    cardSubtitle: stage.subtitle,
    cardDetailedText: [
      stage.detail,
      `Real-world example: ${stage.realWorldExample}`,
      `Did you know? ${stage.didYouKnow}`
    ],
    media: {
      type: "IMAGE",
      source: {
        url: stage.gifUrl
      }
    }
  }));

  const togglePlay = () => {
    // If the tour hasn't started yet (first click), begin from the first item.
    if (activeItemIndex === null) {
      setActiveItemIndex(0);
      setIsPlaying(true);
      return;
    }

    // If we are at the end and we press play again, restart from the beginning.
    if (!isPlaying && activeItemIndex === STAGES.length - 1) {
      setActiveItemIndex(0);
      setIsPlaying(true);
    } else {
      // Otherwise, just toggle the playing state (pause/resume).
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleCardClick = (item, index) => {
    setActiveItemIndex(index);
    setIsPlaying(false); // Stop the tour on manual interaction
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <header className="text-center mb-12 relative">
        <h1 className="text-5xl font-bold text-gray-100">The Life Journey of Data</h1>
        <p className="text-lg text-gray-400 mt-2">From a single bit to actionable insight, follow the path.</p>
        <div className="absolute top-1/2 -translate-y-1/2 left-8">
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            onClick={togglePlay}
          >
            Begin Tour
          </Button>
        </div>
      </header>

      <div className="w-full h-[80vh]">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          activeItemIndex={activeItemIndex}
          onCardClick={handleCardClick}
          disableToolbar
          theme={{
            primary: '#0ea5e9',
            secondary: '#4b5563',
            cardBgColor: '#1f2937',
            cardForeColor: '#d1d5db',
            titleColor: '#ffffff',
            titleColorActive: '#ffffff',
          }}
          fontSizes={{
            cardSubtitle: '0.85rem',
            cardText: '0.8rem',
            cardTitle: '1.2rem',
            title: '1rem',
          }}
        />
      </div>
    </div>
  );
}
