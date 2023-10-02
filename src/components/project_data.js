import manuels from "../images/manuels.PNG";
import wick from "../images/realtor.PNG";
import stream from "../images/stream.PNG";
import fitness from "../images/gym.PNG";

const data = {
  3: {
    title: "Manuel's",
    info:
      "A restaurant site I built for a client using HTML, CSS, and React. I also used NPM and Node JS on the backend",
    img_src: manuels,
    github: "https://github.com/EddieCornelious/restaurant",
    url: "https://manuels-restaurant.netlify.app"
  },
  1: {
    title: "John & Wrink",
    info:
      "A real-estate site I built for a client using HTML, Node JS, CSS, and React. I really wanted to focus on the design for this site",
    img_src: wick,
    github: "https://github.com/EddieCornelious/homes",
    url: "https://johnandwrink.netlify.app"
  },
  2: {
    title: "DashBoard Box",
    info:
      "A dashboard/portal for that allows users to view popular Twitch games and streams live and sort or filter results based on certain criteria",
    img_src: stream,
    github: "https://github.com/EddieCornelious/stream",
    url: "https://twitchy-witchy.netlify.app"
  },
  4: {
    title: "Xenos Fitness",
    info:
      "A site I built for a fitness center that uses HTML, CSS, and React. I also used NPM and Node JS on the backend",
    img_src: fitness,
    github: "https://github.com/EddieCornelious/fitness",
    url: "https://xenosfitness.netlify.app"
  }
};

export default data;
