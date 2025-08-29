import instagramImage from "@assets/icons/instagram-icon.svg";
import calendlyImage from "@assets/icons/calendly.svg";
import githubImage from "@assets/icons/github-icon.svg";
import linkedinImage from "@assets/icons/linkedin-icon.svg";

interface links {
  text: string;
  icon: ImageMetadata;
  href: string;
}
export const socialMediaLinks: links[] = [
  {
    text: "Instagram",
    icon: instagramImage,
    href: "https://www.instagram.com/delebecq22/",
  },

  {
    text: "LinkedIn",
    icon: linkedinImage,
    href: "https://www.linkedin.com/in/santiago-delebecq-8630a2215/",
  },
  {
    text: "GitHub",
    icon: githubImage,
    href: "https://github.com/Santidele22",
  },
  {
    text: "Calendly",
    icon: calendlyImage,
    href: "https://calendly.com/santiidele21/new-meeting",
  },
];
