import SocialIcon from "./social-icons";

var variablesStore = {
  author: "SACC",
  title: "Yearbook",
  email: "sacc@iiit.ac.in",
  github: "https://github.com/SACC-IIIT-Hyd/",
  facebook: "https://www.facebook.com/iiith.alumnicell/",
  linkedin: "https://www.linkedin.com/company/alumni-cell-iiit-h/",
  instagram: "https://www.instagram.com/alumnicell_iiith/",
  youtube: "https://www.youtube.com/",
};

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${variablesStore.email}`}
            size={6}
          />
          <SocialIcon kind="github" href={variablesStore.github} size={6} />
          <SocialIcon kind="facebook" href={variablesStore.facebook} size={6} />
          <SocialIcon kind="youtube" href={variablesStore.youtube} size={6} />
          <SocialIcon kind="linkedin" href={variablesStore.linkedin} size={6} />
          <SocialIcon
            kind="instagram"
            href={variablesStore.instagram}
            size={6}
          />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            {variablesStore.author} {variablesStore.title}
          </div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
