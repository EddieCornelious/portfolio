import manuels from "../images/manuels.PNG";
import wick from "../images/realtor.PNG";
import stream from "../images/stream.PNG";
import fitness from "../images/gym.PNG";
import demo1 from "../images/gym.mp4";
import demo2 from "../images/manuel.mp4";
import demo3 from "../images/real_estate.mp4";
import demo4 from "../images/stream.mp4";
const data = {
  3: {
    title: "Manuel's",
    info: "A restaurant site I built for a client using HTML, CSS, React",
    img_src: manuels,
    github: "https://github.com/EddieCornelious/restaurant",
    demo: demo2
  },
  1: {
    title: "John & Wrink",
    info: "A Real-Estate site built using HTML, NodeJS, CSS, and React",
    img_src: wick,
    github: "https://github.com/EddieCornelious/homes",
    demo: demo3
  },
  2: {
    title: "DashBoard Box",
    info:
      "A dashboard/portal for a website so user can view popular Twitch games and streams live",
    img_src: stream,
    github: "https://github.com/EddieCornelious/stream",
    demo: demo4
  },
  4: {
    title: "Fitness Center",
    info:
      "A site built for a fitness center that uses HTML, CSS, NodeJS, and React",
    img_src: fitness,
    github: "https://github.com/EddieCornelious/fitness",
    demo: demo1
  }
};

export default data;
