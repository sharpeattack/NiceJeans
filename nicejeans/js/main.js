
const videosEl = document.querySelector('.videos')
const hero = document.querySelector('.hero')

const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}


function createVideo(src) {
  const video = document.createElement('video')
  video.src = src
  video.autoplay = true
  video.loop = true
  // sets classnames to created html elements
  video.className = 'video'

  return video
}


fetch('https://api.giphy.com/v1/gifs/search?api_key=mYklkebLFCyjMYQ8QVF5BePmWAz3G31c&q=denim&limit=25&offset=0&rating=G&lang=en').then(function(response){
  return response.json();
}).then(function(json) {
  const gif = randomChoice(json.data)
  const src = gif.images.original.mp4
  console.log(src);

  const video = createVideo(src)
  videosEl.appendChild(video)



}).catch(function(error) {

})
