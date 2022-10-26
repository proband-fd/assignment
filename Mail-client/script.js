const mail = (async function () {
  const data = await getData();
  const { inbox, sent, trash } = data;

  async function getData() {
    let data = fetch('data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('ERROR: Request failed');
        }
        return res.json();
      })
      .catch(err => console.log(err));

    return data;
  }

  function renderMailbox(obj) {
    if ('content' in document.createElement('template')) {
      const mailbox = document.querySelector(".mailbox");
      const template = document.querySelector("#mail");
      /* TODO:
       * - Use map and return object with nodes, instead of appending directly into the DOM
       * - Throw and catch error (globally
       */
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const clone = template.content.cloneNode(true);
          let name = clone.querySelector(".name");
          let time = clone.querySelector(".time");
          let subject = clone.querySelector(".entry__subject");
          let snippet = clone.querySelector(".entry__snippet");
          name.textContent = obj[key].from;
          time.textContent = obj[key].timestamp;
          subject.textContent = obj[key].subject;
          snippet.textContent = obj[key].body.substring(0, 100);

          mailbox.appendChild(clone);
        }
      }
    } else {
      console.error('Template not supported');
    }
  }

  renderMailbox(inbox)

})();
