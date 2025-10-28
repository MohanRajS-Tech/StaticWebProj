
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
  },
  {
    title: "Data Ingestion",
    subtitle: "Collecting the Raw Fuel",
    detail: "Data is gathered from diverse sources—like apps, IoT devices, and logs—and brought into a central staging area.",
    gifUrl: stage2,
  },
  {
    title: "Secure Transmission",
    subtitle: "The Armored Convoy",
    detail: "Data is encrypted and securely moved from its source to the processing environment, protecting it from interception.",
    gifUrl: stage3,
  },
  {
    title: "Processing & Cleaning",
    subtitle: "Refining the Raw Material",
    detail: "Raw data is transformed, standardized, and cleansed of errors to ensure it's accurate and ready for analysis.",
    gifUrl: stage4,
  },
  {
    title: "Data Storage",
    subtitle: "The Digital Vault",
    detail: "Processed data is stored in a secure, scalable, and reliable database or data warehouse for future access.",
    gifUrl: stage5,
  },
  {
    title: "Data Analysis",
    subtitle: "Uncovering Hidden Patterns",
    detail: "Analysts and data scientists query the data, looking for trends, correlations, and insights that can drive decisions.",
    gifUrl: stage6,
  },
  {
    title: "Machine Learning",
    subtitle: "Teaching the Data to Predict",
    detail: "Algorithms are trained on the data to create models that can forecast future outcomes and identify anomalies.",
    gifUrl: stage7,
  },
  {
    title: "Data Visualization",
    subtitle: "Telling the Story with a Chart",
    detail: "Insights are transformed into charts, graphs, and dashboards, making complex information easy to understand.",
    gifUrl: stage8,
  },
  {
    title: "Insight & Decision",
    subtitle: "The Moment of Clarity",
    detail: "Stakeholders use the visualized data to make informed, data-driven decisions that shape business strategy.",
    gifUrl: stage9,
  },
  {
    title: "Action & Automation",
    subtitle: "Putting Insights to Work",
    detail: "Decisions trigger automated actions, such as sending alerts, adjusting system parameters, or launching new processes.",
    gifUrl: stage10,
  },
  {
    title: "Archival & Deletion",
    subtitle: "The End of the Line",
    detail: "Data that is no longer needed is securely archived for compliance or permanently deleted to manage storage costs.",
    gifUrl: stage11,
  },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

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
    cardDetailedText: stage.detail,
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
