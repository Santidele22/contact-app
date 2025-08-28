import instagramImage from "@assets/icons/instagram.svg"
import calendlyImage from "@assets/icons/calendar.svg"
import githubImage from "@assets/icons/github.svg"
import linkedinImage from "@assets/icons/linkedin.svg"



interface links {
    text: string
    icon: ImageMetadata
    href: string
}
export const socialMediaLinks: links[] = [
    {
        text: "Instagram",
        icon: instagramImage,
        href: "https://www.instagram.com/"
    },

    {
        text: "LinkedIn",
        icon: linkedinImage,    
        href: "https://www.linkedin.com/"
    },
    {
        text: "GitHub",
        icon: githubImage,
        href: "https://github.com/"
    },
        {
        text: "Calendly",
        icon: calendlyImage,
        href: "https://calendly.com/"
    },
   
]
