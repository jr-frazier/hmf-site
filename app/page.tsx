import Image from "next/image";
import ConfettiButton from "../components/ConfettiButton";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center ">
        <div className="navbar bg-base-100 shadow-sm mb-20">
            <ConfettiButton />
        </div>
        <div>
            <h1 className="font-extrabold text-4xl">Welcome to Harper's Site!!!</h1>
        </div>
        <Image
            src="/img_1.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />


        <div className="px-50 pt-20 flex flex-col gap-2">
            <h2 className="font-bold text-3xl">Hey! 👋</h2>
            <p className="leading-[1.75] font-medium text-xl">I’m a 4th grader who LOVES watching YouTube, especially after school or on the weekends. Some of my favorite YouTubers are Aphmau (her Minecraft roleplays are the best!), CMH, Little Mind XD, and GLITCH. I like their videos because they’re really funny, creative, and full of cool adventures. I also really enjoy playing Roblox and Minecraft—they’re my go-to games! In Roblox, I like exploring different worlds and playing games with my friends, and in Minecraft, I love building houses, going on quests, and sometimes just running around in creative mode.

                Besides gaming and YouTube, I do Jiu-Jitsu, which is super fun and helps me stay strong and learn cool moves. It makes me feel like a ninja! I also love hanging out and playing with my friends—we play tag, laugh a lot, and sometimes even build stuff together in Minecraft.

                Overall, I like to have fun, learn new things, and go on adventures—whether it’s in real life or in my favorite games!</p>
        </div>

    </div>
  );
}
