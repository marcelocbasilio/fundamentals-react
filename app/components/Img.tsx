import Image from "next/image";

export const Img = () => (
    <Image
        className="p-1 dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={38}
        priority={true}
    />
)