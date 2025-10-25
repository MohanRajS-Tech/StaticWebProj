
import { Chrono } from "react-chrono";

const STAGES = [
  {
    title: "Data Generation",
    subtitle: "The Spark of Information",
    detail: "Every click, tap, and sensor reading creates a new data point, forming the initial spark in the data lifecycle.",
    color: "sky",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9jZzVsdDU1enE5NnI1d2s5d3J1dDR4N3g2YjJtdWZweWJtZ2wzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyE/giphy.gif",
  },
  {
    title: "Data Ingestion",
    subtitle: "Collecting the Raw Fuel",
    detail: "Data is gathered from diverse sources—like apps, IoT devices, and logs—and brought into a central staging area.",
    color: "blue",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDV2b3N3eDFhaTdvaHZqOHg5NDFmM3NiaTk3bnZ1cWdtaWd3YmZxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
  },
  {
    title: "Secure Transmission",
    subtitle: "The Armored Convoy",
    detail: "Data is encrypted and securely moved from its source to the processing environment, protecting it from interception.",
    color: "indigo",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5yMmI5eXo4eDN0cW5hZDY4cjd2bHljZ3R2ZHNpZzBmbzF6ZG55aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Epg2qsY3s533SLe/giphy.gif",
  },
  {
    title: "Processing & Cleaning",
    subtitle: "Refining the Raw Material",
    detail: "Raw data is transformed, standardized, and cleansed of errors to ensure it's accurate and ready for analysis.",
    color: "purple",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGFkcmJpZGdqZnh6dGRuNWM1dGlzZGFubndjY3pkaWxudWk2ZzAyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LdOyjZ7io5Msw/giphy.gif",
  },
  {
    title: "Data Governance & Quality",
    subtitle: "Setting the Rules",
    detail: "Policies are applied to ensure data is accurate, consistent, and used responsibly, maintaining its integrity and compliance.",
    color: "violet",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGZqZmhpc3R2NmdsYWZ4N3F5bmhvZGNqeTR1dDFsZzBrcW42OXA0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26gR1wYpogPiJ3C5G/giphy.gif",
  },
  {
    title: "Data Enrichment",
    subtitle: "Adding Context and Value",
    detail: "The data is augmented with additional information from other sources to provide deeper context and create a richer dataset.",
    color: "fuchsia",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNtM2d2MWVqbnZ1bXN0Y3FmYmZ1NWhuYzdiZWtqZ3g5b3JpMHNqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9Igzozfc6aYJAZj2/giphy.gif",
  },
  {
    title: "Secure Storage",
    subtitle: "The Digital Fort Knox",
    detail: "Processed data is stored in a secure and scalable repository, like a data warehouse or data lake, ready for access.",
    color: "pink",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBpa2R6ZndkM2d2NWN0dmd5cmN3ZGdqMWZ3M3RnMzJ3cHZhbnA2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPoZniJ2hq8IItG/giphy.gif",
  },
  {
    title: "Analysis & AI",
    subtitle: "Uncovering Hidden Treasures",
    detail: "Analysts and AI models query the data to identify trends, make predictions, and extract actionable insights.",
    color: "rose",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczlqYWl6cnE3ZmdxZTQ0eDU1dHhwejJ5bWI3ZWE3eXo1Z3p2dDl6NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyE/giphy.gif",
  },
  {
    title: "Visualization & Action",
    subtitle: "Bringing Insights to Life",
    detail: "Insights are presented in dashboards and reports, empowering leaders to make data-driven decisions and take action.",
    color: "red",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajcxdm84Y2VsdGhoOW92ZWQ1eXlleWh2cXRwNnZqMXZtZnBxcXN0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyE/giphy.gif",
  },
  {
    title: "Feedback Loop & Model Retraining",
    subtitle: "Making the System Smarter",
    detail: "The outcomes of actions are fed back into the system to retrain AI models, continuously improving their accuracy and performance.",
    color: "orange",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm45bjR0NTU2M2hsendyc3RsdGgyeDFmMmZlM2czNGR5ZzZmM2w1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2Pks3s2y1G93Gg/giphy.gif",
  },
  {
    title: "Data Archiving & Retirement",
    subtitle: "The Final Resting Place",
    detail: "Old data is moved to long-term storage or securely deleted to manage costs and comply with data retention policies.",
    color: "amber",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWd0dHVjcHhkaGNreG1iems3MXp0eGF2Y3Jsbjhhc3dyMWJ3bWJzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTcnSNxfOfmC7J3w4w/giphy.gif",
  },
];

export default function App() {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-100">
          The Life Journey of Data
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          From a single bit to actionable insight, follow the path.
        </p>
      </header>

      <div style={{ width: "100%", height: "90vh" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#0ea5e9',
            secondary: '#4b5563',
            cardBgColor: '#1f2937',
            cardForeColor: '#d1d5db',
            titleColor: '#ffffff',
            titleColorActive: '#ffffff',
          }}
          slideShow
          slideItemDuration={3000}
          scrollable={{ scrollbar: true }}
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
