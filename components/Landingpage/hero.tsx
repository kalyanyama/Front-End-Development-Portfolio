import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SITE_INFORMATION } from "@/utilities/content";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="about">
      <div className="grid items-center gap-5 mt-20">
        <div className="w-[40px] sm:w-[60px] shadow-xs shadow-zinc-100 border-zinc-400 border rounded-lg">
          <AspectRatio ratio={1}>
            <Image
              src={SITE_INFORMATION.profile}
              fill
              draggable={false}
              alt="profile"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <h1 className="scroll-m-20 tracking-tight text-lg">Kalyan yama.</h1>
      </div>
    </div>
  );
};

export default Hero;
