
import { Chrono } from "react-chrono";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const STAGES = [
  {
    title: "Data Generation",
    subtitle: "The Spark of Information",
    detail: "Every click, tap, and sensor reading creates a new data point, forming the initial spark in the data lifecycle.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9jZzVsdDU1enE5NnI1d2s5d3J1dDR4N3g2YjJtdWZweWJtZ2wzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyE/giphy.gif",
  },
  {
    title: "Data Ingestion",
    subtitle: "Collecting the Raw Fuel",
    detail: "Data is gathered from diverse sources—like apps, IoT devices, and logs—and brought into a central staging area.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDV2b3N3eDFhaTdvaHZqOHg5NDFmM3NiaTk3bnZ1cWdtaWd3YmZxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
  },
  {
    title: "Secure Transmission",
    subtitle: "The Armored Convoy",
    detail: "Data is encrypted and securely moved from its source to the processing environment, protecting it from interception.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5yMmI5eXo4eDN0cW5hZDY4cjd2bHljZ3R2ZHNpZzBmbzF6ZG55aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Epg2qsY3s533SLe/giphy.gif",
  },
  {
    title: "Processing & Cleaning",
    subtitle: "Refining the Raw Material",
    detail: "Raw data is transformed, standardized, and cleansed of errors to ensure it's accurate and ready for analysis.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGFkcmJpZGdqZnh6dGRuNWM1dGlzZGFubndjY3pkaWxudWk2ZzAyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LdOyjZ7io5Msw/giphy.gif",
  },
  {
    title: "Data Storage",
    subtitle: "The Digital Vault",
    detail: "Processed data is stored in a secure, scalable, and reliable database or data warehouse for future access.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTN2bjBxa2N3eXJ3dWIzZXNqZ3Zub3libGJ5aDZna293aGZzODYydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnA0I7b6p3l_5m/giphy.gif",
  },
  {
    title: "Data Analysis",
    subtitle: "Uncovering Hidden Patterns",
    detail: "Analysts and data scientists query the data, looking for trends, correlations, and insights that can drive decisions.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hveGRoY2I1dXljYjRicXZ1dDl3a25yOWhjbjZtdHUweWh0bWE5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btNqJj2tQ6pAW2Y/giphy.gif",
  },
  {
    title: "Machine Learning",
    subtitle: "Teaching the Data to Predict",
    detail: "Algorithms are trained on the data to create models that can forecast future outcomes and identify anomalies.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s0Y2I1bnFtaTlibjFic2x0MGFyNnA4aHIwZzlxMDR0NndrbHM0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Jd8K0Lg3ie2M9DW/giphy.gif",
  },
  {
    title: "Data Visualization",
    subtitle: "Telling the Story with a Chart",
    detail: "Insights are transformed into charts, graphs, and dashboards, making complex information easy to understand.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY0cmNjdjlna2R1aDFoZWdocDh0dHNjM3Y3eHhpcHIxMnJ6dDB0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aD1zsNc2j623e4U/giphy.gif",
  },
  {
    title: "Insight & Decision",
    subtitle: "The Moment of Clarity",
    detail: "Stakeholders use the visualized data to make informed, data-driven decisions that shape business strategy.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWNsdG00ZHM1Mmc3c3R4ZDRtb2N0cDZ1ZjRwbXB5cGo3eHV2c2M0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlE7uhX8KFgEmY/giphy.gif",
  },
  {
    title: "Action & Automation",
    subtitle: "Putting Insights to Work",
    detail: "Decisions trigger automated actions, such as sending alerts, adjusting system parameters, or launching new processes.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHhpdGo1b2J2ZnJ3eW80ajgwbjZ0enRjMTAxY2NmeGpna2ZqZzFkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s6aV1uQ1K222s/giphy.gif",
  },
  {
    title: "Archival & Deletion",
    subtitle: "The End of the Line",
    detail: "Data that is no longer needed is securely archived for compliance or permanently deleted to manage storage costs.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGY5NjZtY3RtcTNqa2Z2N2xkaGdpZWxybDBjNnR6bm5tcnFmN2o2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1XGGfuI0wd3mk1fa/giphy.gif",
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

  // Effect to scroll the active item into view
  useEffect(() => {
    if (activeItemIndex === null) return;

    const allCards = document.querySelectorAll('.vertical-item-row');
    const activeCard = allCards[activeItemIndex];

    if (activeCard) {
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
