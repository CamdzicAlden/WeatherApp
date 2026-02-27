//SocialMedia component for displaying social media icons
function SocialMedia() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/aldencamdzic/",
      icon: "/icons/LinkedIn.svg",
      name: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/_camdzicc_?igsh=MTVjanY3M3BrMm5lMg==",
      icon: "/icons/Instagram.svg",
      name: "Instagram",
    },
    {
      href: "https://github.com/CamdzicAlden",
      icon: "/icons/GitHub.svg",
      name: "GitHub",
    },
  ];

  return (
    //Main flex container
    <div className="flex justify-center items-center gap-2">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt=""
            className="w-[clamp(0.1rem,1.5dvw,10rem)] h-auto transform transition-transform duration-200 ease-in-out hover:scale-110 will-change-transform"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
