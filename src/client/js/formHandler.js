import { checkForURL } from "./checkURL";
import "regenerator-runtime/runtime";
function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById("name").value;
  if (checkForURL(formText)==true) {
    retraiveData("/nlp", { urlData: formText }).then(function (res) {
      document.getElementById(
        "polarity"
      ).innerHTML = `Polarity: ${res.score_tag}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "text"
      ).innerHTML = `Text: ${res.sentence_list[0].text}`;
    });
  } else {
    return alert(`ERROR: "${formText}" is not a valid URL`);
  }
}

const retraiveData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const nlpData = await response.json();
    return nlpData;
  } catch (error) {}
};

export { handleSubmit };
