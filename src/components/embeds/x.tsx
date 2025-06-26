
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
    <div className='max-w-xs '>
      <blockquote className="twitter-tweet  md:rounded-2xl">
      <a href={url.replace('x.com','twitter.com')}></a>
    </blockquote>
    </div>
  );
};

export default XPostEmbed;