import { useEffect } from 'react';

const XPostEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    // Ensure the widget script is loaded
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote className="twitter-tweet w-fit rounded-2xl">
      <a href={url.replace('x.com','twitter.com')}></a>
    </blockquote>
  );
};

export default XPostEmbed;