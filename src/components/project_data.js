import manuels from "../images/manuels.PNG";
import wick from "../images/realtor.PNG";
import stream from "../images/stream.PNG";
import fitness from "../images/gym.PNG";

const data = {
  3: {
    title: "Manuel's",
    info: "A restaurant site I built for a client using HTML, CSS, React",
    img_src: manuels,
    github: "https://github.com/EddieCornelious/restaurant",
    url: "https://www.manuelsgrill.com"
  },
  1: {
    title: "John & Wrink",
    info: "A Real-Estate site built using HTML, NodeJS, CSS, and React",
    img_src: wick,
    github: "https://github.com/EddieCornelious/homes",
    url: "https://www.johnandwrink.com"
  },
  2: {
    title: "DashBoard Box",
    info:
      "A dashboard/portal for a website so user can view popular Twitch games and streams live",
    img_src: stream,
    github: "https://github.com/EddieCornelious/stream",
    url: "https://eddiecornelious.github.io/stream/"
  },
  4: {
    title: "Fitness Center",
    info:
      "A site built for a fitness center that uses HTML, CSS, NodeJS, and React",
    img_src: fitness,
    github: "https://github.com/EddieCornelious/fitness",
    url: "https://www.xenosfitness.com"
  }
};

export default data;
