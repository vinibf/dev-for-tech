export const get = async (url) => {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
    accept: "application/vnd.github+json",
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
