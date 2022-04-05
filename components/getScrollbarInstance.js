import Scrollbar from "smooth-scrollbar";
import navStyles from "../styles/sub_sections/scrollbar.module.scss";

const getActiveScrollbar = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = document.querySelector(`#${navStyles.scrollbarContainer}`)
      const scrollbar = Scrollbar.get(element);
      if (scrollbar) {
        resolve(scrollbar);
      } else {
        reject(scrollbar);
      }
    }, 500);
  });
}

export default getActiveScrollbar;
