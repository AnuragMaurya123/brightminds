import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const newsData = [
  { news: "I've never seen anything like this before. It's amazing. I love it." },
  { news: "I don't know what to say. I'm speechless. This is amazing." },
  { news: "I'm at a loss for words. This is amazing. I love it." },
  { news: "The best decision I ever made. Truly next level!" },
  { news: "This blew my mind. I can't stop thinking about it." },
  { news: "I wish I found this sooner. It's a game changer!" },
];

const firstRow = newsData.slice(0, newsData.length);

const NewsCard = ({ news }: { news: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[260px] sm:w-[300px] md:w-[320px] h-auto cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 flex-shrink-0 ",
        // light mode
        "bg-amber-600  hover:bg-gray-100 hover:text-amber-600 text-white",
        // dark mode
        "dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-gray-100",
        // animation
        "transition-all duration-300 ease-in-out hover:scale-[1.02]"
      )}
    >
      <h1 className="text-sm leading-relaxed font-medium ">
        “{news}”
      </h1>
    </figure>
  );
};

export function NewsMarquee() {
  return (
    <div className="relative w-full py-6 ">
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((item, i) => (
            <NewsCard key={i} news={item.news} />
          ))}
        </Marquee>

        {/* Optional: left fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
        {/* Optional: right fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
      </div>
    </div>
  );
}
