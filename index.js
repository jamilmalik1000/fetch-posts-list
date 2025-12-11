
      let btn = document.getElementById("fetchButton");
      let output = document.getElementById("output");
      let url = "https://jsonplaceholder.typicode.com/posts";
      
      btn.addEventListener("click", () => {
        getdata(url);
      });

      async function getdata(url) {
        try {
          output.innerHTML = '<div class="loading">⏳ Loading titles...</div>';
          
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
          } else {
            let data = await response.json();
            
            // Create styled title list
            let titlesHTML = data.map((post, index) => 
              `<div class="title-item">
                <span class="title-number">${index + 1}.</span>${post.title}
              </div>`
            ).join('');
            
            output.innerHTML = titlesHTML;
          }
        } catch (error) {
          output.innerHTML = `<div style="color: #e74c3c; padding: 20px; text-align: center;">
             Error: ${error.message}
          </div>`;
          console.error(error);
        }
      }