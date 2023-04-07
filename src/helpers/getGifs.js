export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bc42LkqnR48KYW45afSrkgpx9k4nOiyC&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
