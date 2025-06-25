export function YoutubeEmbed({url}:{
        url:string
}) {
        return (
                <iframe className="w-full rounded-2xl  shadow-muted-foreground group-hover:translate-1 group-hover:shadow-xl transition-all duration-300;" src={convertToEmbedLink(url)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        )
}

function convertToEmbedLink(shareUrl:string):string {
  const match = shareUrl.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  if (!match) return " ";
  return `https://www.youtube.com/embed/${match[1]}`;
}