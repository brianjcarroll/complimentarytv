

export default function Home() {
  const videoEmbedUrls = [
    "https://www.youtube.com/embed/rcuuV0q7aI4?si=KgibChRX-i_OO_l0",
    "https://www.youtube.com/embed/pAKa_EGhHRI?si=GvC4yjwsVugZi4Xr",
    "https://www.youtube.com/embed/Ocf5cC69hKU?si=tOoxspifx8T3wtCX",
    "https://www.youtube.com/embed/YbYtL0UWOCk?si=5zP5TVdN1CIyEvkZ",
    "https://www.youtube.com/embed/85GSqYgMCUg?si=a0_3MxvpVOmfSYQq"
  ]

  const introText = "Hello! These are a series of sketches currently in development for a show called Complimentary TV. They are written, directed, produced, and edited by Tom Hunt. If you enjoy them, please make sure to let us know! Thanks for stopping by! "
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-overpass)] max-w-4xl m-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center m-auto font-[family-name:var(--font-space-mono)]">
          Complimentary TV
        </h1>
        <p className="text-lg sm:text-xl text-center">
          {introText}
        </p>
        <p className="text-lg sm:text-xl text-center m-auto">
          <a className="text-blue-500 underline" href="mailto:tomhunt.us@gmail.com">tomhunt.us@gmail.com</a>
        </p>
        <hr className="w-[75px] md:w-[100px] border-t-2 border-gray-300 m-auto" />
        {videoEmbedUrls.map((url, index) => (
          <div className="relative pb-[56.25%] w-full h-0" key={index}>
          <iframe
            
            className="absolute top-0 left-0 h-full w-full"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
        ))}
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       <p className="text-center">
            
       </p>
      </footer>
    </div>
  );
}
