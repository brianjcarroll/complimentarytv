import Link from "next/link";

export default function PitchDeck() {
  const pitchDeckImages = [
    "https://i.imgur.com/R3UY4qW.png",
    "https://i.imgur.com/QLllGUe.png",
    "https://i.imgur.com/vRcNBhZ.png",
    "https://i.imgur.com/SNhtYWd.png",
    "https://i.imgur.com/IPeGZS2.png",
    "https://i.imgur.com/CPIcnf0.png",
    "https://i.imgur.com/yqOfr8r.png",
    "https://i.imgur.com/0VE2tQN.png",
    "https://i.imgur.com/kedOwnG.png",
    "https://i.imgur.com/QdrFpwO.png",
    "https://i.imgur.com/JdAgWl2.png",
    "https://i.imgur.com/JdAgWl2.png",
    "https://i.imgur.com/7BRgCQw.png",
    "https://i.imgur.com/jmBnJXd.png",
    "https://i.imgur.com/UUNqvYg.png"
  ];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-overpass)] max-w-6xl m-auto">
      <main className="flex flex-col gap-[48px] row-start-2 items-center w-full">
        <div className="text-center">
          <div className="mb-4">
            <Link 
              href="/"
              className="inline-block text-blue-500 hover:text-blue-600 underline text-lg"
            >
              ← Back to Episodes
            </Link>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-center m-auto font-[family-name:var(--font-space-mono)] mb-4">
            Complimentary TV
          </h1>
          <p className="text-xl sm:text-2xl text-center font-bold">
            Pitch Deck
          </p>
        </div>

        {/* Pitch Deck Images */}
        <div className="w-full max-w-7xl flex flex-col gap-8">
          {pitchDeckImages.map((imageUrl, index) => (
            <div key={index} className="w-full">
              <img 
                src={imageUrl}
                alt={`Pitch deck slide ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-bold"
          >
            Watch Episodes
          </Link>
          <a 
            href="mailto:tomhunt.us@gmail.com"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold"
          >
            Get In Touch
          </a>
        </div>
      </main>
    </div>
  );
} 
